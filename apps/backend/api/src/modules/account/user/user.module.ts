import { Module } from '@nestjs/common';

import { UploadsModule } from '@/modules/uploads';

import { UserController } from './controllers';
import { UserRepository } from './repositories';
import { UserService } from './services';

@Module({
  imports: [UploadsModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserRepository],
})
export class UserModule {}
