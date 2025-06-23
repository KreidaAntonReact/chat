import type { ConfigService } from '@nestjs/config';

export const isDev = (config: ConfigService): boolean => config.getOrThrow<string>('NODE_ENV') === 'development';
