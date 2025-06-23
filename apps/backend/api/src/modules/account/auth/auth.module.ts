import { Module } from '@nestjs/common';

import { SessionModule } from '@/modules/account/session';
import { UserModule } from '@/modules/account/user';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, SessionModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
