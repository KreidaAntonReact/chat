import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

type TArgsFileInterceptor<T extends (...args: any) => any> = T extends (...args: infer Args) => any ? Args : never;

export const FileUpload = (...args: TArgsFileInterceptor<typeof FileInterceptor>) =>
  UseInterceptors(FileInterceptor(...args));
