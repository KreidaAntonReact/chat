import { Injectable, type CanActivate, type ExecutionContext, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';
import { UserRepository } from '@/modules';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly userRepository: UserRepository) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (!request.session.userId) {
      throw new UnauthorizedException('User not logged in');
    }

    const user = await this.userRepository.findById(request.session.userId);

    if (!user) {
      throw new UnauthorizedException('User not logged in');
    }

    request.user = user;

    return true;
  }
}
