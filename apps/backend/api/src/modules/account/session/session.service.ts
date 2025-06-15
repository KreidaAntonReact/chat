import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import type { User as UserModel } from '@prisma/generated';

import { RedisService } from '@/core/redis';

@Injectable()
export class SessionService {
  constructor(private redisService: RedisService) {}

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
}
