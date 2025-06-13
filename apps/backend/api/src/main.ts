import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { RedisStore } from 'connect-redis';
import { CoreModule, RedisService } from './core';
import { IS_DEV } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const configService = app.get(ConfigService);
  const redisService = app.get(RedisService);

  app.use(cookieParser(configService.getOrThrow<string>('COOKIE_SECRET')));

  app.use(
    session({
      secret: configService.getOrThrow<string>('SESSION_SECRET'),
      saveUninitialized: false,
      resave: false,
      name: configService.getOrThrow<string>('SESSION_NAME'),
      cookie: {
        domain: configService.getOrThrow<string>('SESSION_DOMAIN'),
        maxAge: 86400000,
        secure: IS_DEV ? false : true,
        httpOnly: IS_DEV ? false : true,
        sameSite: 'lax',
      },
      store: new RedisStore({
        client: redisService.client,
        prefix: configService.getOrThrow<string>('SESSION_PREFIX'),
      }),
    }),
  );

  await app.listen(configService.getOrThrow<number>('API_PORT') ?? 5001);
}
bootstrap();
