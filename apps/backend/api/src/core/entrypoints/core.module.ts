import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { zodValidationConfig } from '@/core/config';
import { PrismaModule } from '@/core/prisma';
import { RedisModule } from '@/core/redis';
import { UserModule, AuthModule, SessionModule, UploadsModule } from '@/modules';
import { IS_DEV } from '@/shared';

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
    UploadsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: zodValidationConfig,
    },
  ],
})
export class CoreModule {}
