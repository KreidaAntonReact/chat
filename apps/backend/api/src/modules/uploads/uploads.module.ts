import { Module } from '@nestjs/common';

import { UploadsController } from './controllers';
import { UploadsService } from './services';

@Module({
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
