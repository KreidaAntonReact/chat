import { Controller, Post, Body } from '@nestjs/common';

import { CreateUploadDto } from '../dto/create-upload.dto';
import { UploadsService } from '../services/uploads.service';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadsService.create(createUploadDto);
  }
}
