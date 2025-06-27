import { APP_PIPE } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { UserModule, AuthModule, SessionModule } from '@/modules';
import { IS_DEV } from '@/shared';

import { PrismaModule } from '../prisma';
import { RedisModule } from '../redis';
import { zodValidationConfig } from '../config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: IS_DEV,
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
