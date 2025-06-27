import { Module } from '@nestjs/common';

import { SessionModule } from '@/modules/account/session';
import { UserModule } from '@/modules/account/user';

import { AuthController } from './controllers';
import { AuthService } from './services';

@Module({
  imports: [UserModule, SessionModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
