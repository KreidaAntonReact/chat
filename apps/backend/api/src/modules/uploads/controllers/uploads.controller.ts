import { Controller, HttpStatus, Post, UploadedFile } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { avatarUploadResponseSchema, TAvatarUploadResponse } from '@packages/contracts';
import { memoryStorage } from 'multer';

import { UploadsService } from '@/modules/uploads/services';
import { Authorization, FileUpload, filtersFileImage, User } from '@/shared';

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('/avatar')
  @ApiOperation({ summary: 'upload user avatar' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    example: { message: 'User not logged in', error: 'Unauthorized', statusCode: HttpStatus.UNAUTHORIZED },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
    example: {
      message: {
        file: 'File is required',
      },
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Bad Request',
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    example: {
      value: 'path/to/file',
    },
  })
  @Authorization()
  @FileUpload('file', {
    storage: memoryStorage(),
    fileFilter: filtersFileImage,
  })
  async uploadAvatar(
    @UploadedFile('file') file: Express.Multer.File,
    @User('username') username: string,
  ): Promise<TAvatarUploadResponse> {
    return avatarUploadResponseSchema.parse({ value: await this.uploadsService.uploadImage(file, username) });
  }
}
