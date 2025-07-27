import { join } from 'path';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import sharp, { FormatEnum } from 'sharp';

@Injectable()
export class UploadsService {
  constructor(private readonly configService: ConfigService) {}
  async uploadFile(file: Express.Multer.File, option?: sharp.ResizeOptions): Promise<string> {
    try {
      const FILE_PATH = join(
        process.cwd(),
        this.configService.getOrThrow<string>('UPLOADS_DIR') ?? 'uploads',
        file.originalname,
      );

      const FORMAT_FILE = file.mimetype.split('/')[1] as keyof FormatEnum;

      await sharp(file.buffer)
        .resize({
          ...option,
          width: option?.width ?? 512,
          height: option?.height ?? 512,
          fit: option?.fit ?? 'contain',
        })
        .toFormat(FORMAT_FILE)
        .toFile(FILE_PATH);

      return FILE_PATH;
    } catch {
      throw Error('Upload file error');
    }
  }
}
