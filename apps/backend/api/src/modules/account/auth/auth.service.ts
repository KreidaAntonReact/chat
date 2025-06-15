import { ConflictException, Injectable } from '@nestjs/common';
import { Request } from 'express';

import { SessionService } from '@/modules/account/session';
import { UserRepository } from '@/modules/account/user/repositories';
import { UserEntity } from '@/modules/account/user/entities';

import { SignInDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionService: SessionService,
  ) {}

  async signUp({ username, email, firsName, lastName }: SignInDto, req: Request): Promise<boolean> {
    const user = new UserEntity({
      username,
      email,
      firsName,
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

    await user.generatePassword(user.username);

    await this.userRepository.create({
      firsName: user.firsName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      passwordHash: user.passwordHash,
    });

    await this.sessionService.createSession(req, user);

    return true;
  }
}
