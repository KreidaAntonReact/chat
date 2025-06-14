import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '@/shared/guards';

export const Authorization = () => applyDecorators(UseGuards(AuthorizationGuard));
