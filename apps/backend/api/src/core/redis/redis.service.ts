import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { isFunction } from '@/shared';

@Injectable()
export class RedisService {
  private readonly url: string;
  private readonly clientRedis: Redis;

  constructor(private readonly configService: ConfigService) {
    this.url = configService.getOrThrow<string>('REDIS_URL');
    this.clientRedis = this.createClient();
  }

  get client(): Redis {
    return this.createProxy(this.clientRedis);
  }

  private createProxy<T extends object>(target: T): T {
    return new Proxy(target, {
      get: (target, prop) => {
        const value = target[prop];

        if (isFunction(value)) {
          return value.bind(target[prop]);
        }

        return value;
      },
    });
  }

  private createClient(): Redis {
    return new Redis(this.url);
  }
}
