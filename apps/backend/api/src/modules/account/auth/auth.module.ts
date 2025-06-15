import { Module } from '@nestjs/common';
import { UserModule } from '@/modules/account/user';
import { SessionModule } from '@/modules/account/session';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [UserModule, SessionModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
