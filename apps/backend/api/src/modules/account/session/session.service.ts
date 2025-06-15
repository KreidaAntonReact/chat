import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import type { User as UserModel } from '@prisma/generated';

import { RedisService } from '@/core/redis';

@Injectable()
export class SessionService {
  constructor(
    private redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(req: Request, user: UserModel): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      req.session.save((error) => {
        if (error) {
          reject(error);
        }

        req.session.userId = user.id;
        req.session.username = user.username;

        resolve(user);
      });
    });
  }

  async destroySession(req: Request, res: Response): Promise<void> {
    return new Promise(async (resolve, reject) => {
      req.session.destroy((error) => {
        if (error) {
          reject(error);
        }

        res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));

        resolve();
      });
    });
  }

  async findSession(req: Request) {}
}
