import { Module } from '@nestjs/common';

import { SessionModule } from '@/modules/account/session';
import { UserModule } from '@/modules/account/user';
import { UploadsModule } from '@/modules/uploads';

import { AuthController } from './controllers';
import { AuthService } from './services';

@Module({
  imports: [UserModule, SessionModule, UploadsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
