import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import type { User as UserModel } from '@prisma/generated';

import { RedisService } from '@/core/redis';

import type { UserEntity } from '@/modules/account/user/entities';

import { ISessionRedis } from './lib';

@Injectable()
export class SessionService {
  constructor(
    private redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(req: Request, user: UserEntity): Promise<UserEntity> {
    return new Promise(async (resolve, reject) => {
      req.session.save((error) => {
        if (error) {
          reject(error);
          return;
        }

        if (!user?.id) {
          reject(new Error('User not found'));
          return;
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

  async findSession(req: Request): Promise<ISessionRedis> {
    try {
      const valueJson = await this.redisService.client.get(
        this.configService.getOrThrow<string>('SESSION_PREFIX') + req.session.id,
      );

      const value: Pick<ISessionRedis, 'session'> | null = valueJson ? await JSON.parse(valueJson) : null;

      if (!value) {
        throw new Error('Session not found');
      }

      return {
        ...value,
        id: req.session.id,
      };
    } catch {
      throw new Error('Find session error');
    }
  }

  async removeSession(req: Request): Promise<boolean> {
    try {
      await this.redisService.client.del(this.configService.getOrThrow<string>('SESSION_PREFIX') + req.session.id);

      return true;
    } catch {
      throw new Error('Remove session error');
    }
  }
}
