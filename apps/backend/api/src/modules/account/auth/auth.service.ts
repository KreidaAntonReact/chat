import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { SessionService } from '@/modules/account/session';
import { UserEntity, UserRepository } from '@/modules/account/user';

import { SignUpDto, SignInDto } from './dto';

import { SuccessResponse } from '@/shared';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionService: SessionService,
  ) {}

  async signUp({ username, email, firstName, lastName, password }: SignUpDto): Promise<SuccessResponse> {
    const user = new UserEntity({
      username,
      email,
      firstName,
      lastName,
    });

    const isFindUsernameUser = await this.userRepository.findUser({
      username: user.username,
    });

    if (isFindUsernameUser) {
      throw new ConflictException('User with this username already exists');
    }

    const isFindEmailUser = await this.userRepository.findUser({
      email: user.email,
    });

    if (isFindEmailUser) {
      throw new ConflictException('User with this email already exists');
    }

    await user.generatePassword(password);

    await this.userRepository.create(user);

    return new SuccessResponse(201);
  }

  async signIn(req: Request, { username, password }: SignInDto): Promise<SuccessResponse> {
    const user = await this.userRepository.findUser({ username });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const userEntity = new UserEntity(user);

    const isCheckPassword = await userEntity.checkPassword(password);

    if (!isCheckPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    await this.sessionService.createSession(req, userEntity);

    return new SuccessResponse(200);
  }
}
