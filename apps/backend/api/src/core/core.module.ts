import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma';
import { RedisModule } from './redis';

import { UserModule } from '@/modules';

import { IS_DEV } from '@/shared';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: IS_DEV,
    }),
    PrismaModule,
    RedisModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
