import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { UploadsController } from './controllers';
import { UploadsService } from './services';
import { UserModule } from '../account';

@Module({
  imports: [
    MulterModule.register({
      dest: `${process.cwd()}/${process.env.UPLOADS_DIR ?? 'uploads'}`,
    }),
    UserModule,
  ],
  providers: [UploadsService],
  controllers: [UploadsController],
})
export class UploadsModule {}
