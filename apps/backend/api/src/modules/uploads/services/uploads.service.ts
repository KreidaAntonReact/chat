import { existsSync, mkdirSync, unlink } from 'fs';
import { join } from 'path';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sharp from 'sharp';

const DEFAULT_SETTINGS_RESIZE: sharp.ResizeOptions = {
  width: 512,
  height: 512,
  fit: 'contain',
};

@Injectable()
export class UploadsService {
  constructor(private readonly configService: ConfigService) {}

  async uploadFile(file: Express.Multer.File, fileName: string, option?: sharp.ResizeOptions): Promise<string> {
    try {
      const UPLOADS_DIR = this.configService.getOrThrow<string>('UPLOADS_DIR') ?? 'uploads';
      const FILE_PATH = join(UPLOADS_DIR, fileName);

      const FORMAT_FILE = file.mimetype.split('/')[1] as keyof sharp.FormatEnum;

      const IS_EXISTS = existsSync(UPLOADS_DIR);

      if (!IS_EXISTS) {
        mkdirSync(UPLOADS_DIR);
      }

      await sharp(file.buffer)
        .resize({
          ...option,
          width: option?.width ?? DEFAULT_SETTINGS_RESIZE.width,
          height: option?.height ?? DEFAULT_SETTINGS_RESIZE.height,
          fit: option?.fit ?? DEFAULT_SETTINGS_RESIZE.fit,
        })
        .toFormat(FORMAT_FILE)
        .toFile(FILE_PATH);

      return FILE_PATH;
    } catch (error) {
      console.error(error);
      throw Error('Upload file error');
    }
  }

  deleteFile(filePath: string | null): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!filePath || !existsSync(filePath)) return resolve(false);

      unlink(filePath, (error) => {
        if (error) {
          return reject(error);
        }

        return resolve(true);
      });
    });
  }
}
