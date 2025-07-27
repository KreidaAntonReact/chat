import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { UploadsService } from './services';

@Module({
  imports: [
    MulterModule.register({
      dest: `${process.cwd()}/${process.env.UPLOADS_DIR ?? 'uploads'}`,
    }),
  ],
  providers: [UploadsService],
  exports: [UploadsService],
})
export class UploadsModule {}
