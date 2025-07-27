import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@packages/utils';

import type { FileInterceptor } from '@nestjs/platform-express';

type TCheckObject<T> = T extends object ? T : never;
type TGetArgsFileFilter<T> = T extends (...args: infer TArgs) => void ? TArgs : never;
type TArgsFileFilter = TGetArgsFileFilter<TCheckObject<Parameters<typeof FileInterceptor>['1']>['fileFilter']>;

export const filtersFileImage = (...rest: TArgsFileFilter): void => {
  const [, file, callback] = rest;

  if (file.size >= MAX_FILE_SIZE || !ACCEPTED_IMAGE_TYPES.includes(file.mimetype)) {
    return callback(new Error('Image size or type is invalid'), false);
  }

  callback(null, true);
};
