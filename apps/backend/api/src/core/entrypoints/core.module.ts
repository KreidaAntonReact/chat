import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { UserModule, AuthModule, SessionModule } from '@/modules';
import { IS_DEV } from '@/shared';

import { zodValidationConfig } from '../config';
import { PrismaModule } from '../prisma';
import { RedisModule } from '../redis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: IS_DEV,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../', 'uploads'),
      serveRoot: '/api/upload',
    }),
    PrismaModule,
    RedisModule,
    UserModule,
    AuthModule,
    SessionModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: zodValidationConfig,
    },
  ],
})
export class CoreModule {}
