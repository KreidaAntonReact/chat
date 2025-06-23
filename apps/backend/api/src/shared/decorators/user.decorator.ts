import { createParamDecorator, type ExecutionContext, UnauthorizedException } from '@nestjs/common';

import type { User as UserModel } from '@prisma/generated';
import type { Request } from 'express';

export const User = createParamDecorator(
  (data: keyof UserModel | undefined, ctx: ExecutionContext): UserModel | string | Date => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      throw new UnauthorizedException('User not logged in');
    }

    return data ? request.user[data] : request.user;
  },
);
