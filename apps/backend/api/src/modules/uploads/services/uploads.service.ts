import { Injectable } from '@nestjs/common';

import { CreateUploadDto } from '../dto/create-upload.dto';

@Injectable()
export class UploadsService {
  create(_createUploadDto: CreateUploadDto) {
    return 'This action adds a new upload';
  }
}
