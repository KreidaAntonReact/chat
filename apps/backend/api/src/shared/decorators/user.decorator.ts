import { createParamDecorator, type ExecutionContext, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import type { User as UserModel } from '@prisma/generated';

export const User = createParamDecorator(
  (data: keyof UserModel | undefined, ctx: ExecutionContext): UserModel | string => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      throw new UnauthorizedException('User not logged in');
    }

    return data ? request.user[data] : request.user;
  },
);
