import { ACCEPTED_IMAGE_TYPES, MAX_DIMENSIONS, MAX_FILE_SIZE, MIN_DIMENSIONS } from '@packages/utils';
import sharp from 'sharp';

import type { FileInterceptor } from '@nestjs/platform-express';

type TCheckObject<T> = T extends object ? T : never;
type TGetArgsFileFilter<T> = T extends (...args: infer TArgs) => void ? TArgs : never;
type TArgsFileFilter = TGetArgsFileFilter<TCheckObject<Parameters<typeof FileInterceptor>['1']>['fileFilter']>;

export const filtersFileImage = (...rest: TArgsFileFilter): void => {
  const [, file, callback] = rest;

  if (file.size >= MAX_FILE_SIZE || !ACCEPTED_IMAGE_TYPES.includes(file.mimetype)) {
    return callback(new Error('Image size or type is invalid'), false);
  }

  sharp(file.buffer)
    .metadata()
    .then((metadata) => {
      const isAccept =
        metadata.width >= MIN_DIMENSIONS.width &&
        metadata.height >= MIN_DIMENSIONS.height &&
        metadata.width <= MAX_DIMENSIONS.width &&
        metadata.height <= MAX_DIMENSIONS.height;

      if (!isAccept) {
        return callback(new Error('Image dimensions are invalid'), false);
      }

      callback(null, true);
    })
    .catch((error) => {
      console.error(error);
    });
};
