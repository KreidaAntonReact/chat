import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { RedisStore } from 'connect-redis';
import { CoreModule, RedisService } from './core';

import { configPipeValidation, IS_DEV } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const configService = app.get(ConfigService);
  const redisService = app.get(RedisService);

  const config = new DocumentBuilder()
    .setTitle('Chat API example')
    .setDescription('The chat API description')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(configPipeValidation);

  app.use(cookieParser(configService.getOrThrow<string>('COOKIE_SECRET')));

  app.enableCors({
    origin: IS_DEV ? '*' : configService.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  app.use(
    session({
      secret: configService.getOrThrow<string>('SESSION_SECRET'),
      saveUninitialized: false,
      resave: false,
      name: configService.getOrThrow<string>('SESSION_NAME'),
      cookie: {
        domain: configService.getOrThrow<string>('SESSION_DOMAIN'),
        maxAge: Number(configService.getOrThrow<string>('SESSION_MAX_AGE')),
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

  app.setGlobalPrefix('api/v1');

  await app.listen(configService.getOrThrow<number>('API_PORT') ?? 5001);
}
bootstrap();
