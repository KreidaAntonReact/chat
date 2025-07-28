import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { SignUpDto, SignInDto } from '@/modules/account/auth/dto';
import { SessionService } from '@/modules/account/session';
import { UserEntity, UserRepository } from '@/modules/account/user';
import { UploadsService } from '@/modules/uploads/services';
import { SuccessResponse } from '@/shared';

import type { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionService: SessionService,
    private readonly uploadsService: UploadsService,
  ) {}

  async signUp(
    { username, email, firstName, lastName, password }: SignUpDto,
    avatar?: Express.Multer.File,
  ): Promise<SuccessResponse> {
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

    if (avatar) {
      const FILE_NAME = `avatar.${user.username}`;

      const filePath = await this.uploadsService.uploadFile(avatar, FILE_NAME, {
        fit: 'contain',
        width: 300,
        height: 300,
      });

      user.avatar = filePath;
    }

    await this.userRepository.create({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      avatar: user.avatar ?? null,
      passwordHash: await user.generatePassword(password),
    });

    return new SuccessResponse(201);
  }

  async signIn(req: Request, { username, password }: SignInDto): Promise<UserEntity> {
    const user = await this.userRepository.findUser({ username });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const userEntity = new UserEntity(user);

    const isCheckPassword = await userEntity.checkPassword(password);

    if (!isCheckPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    return await this.sessionService.createSession(req, userEntity);
  }

  async signOut(req: Request, res: Response): Promise<SuccessResponse> {
    await this.sessionService.destroySession(req, res);

    return new SuccessResponse(200);
  }

  async checkSession(req: Request): Promise<boolean> {
    const session = await this.sessionService.findSession(req);

    return session.id === req.session.id;
  }
}
