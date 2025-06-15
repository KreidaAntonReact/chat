import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  private readonly url: string;
  private readonly clientRedis: Redis;

  constructor(private readonly configService: ConfigService) {
    this.url = configService.getOrThrow<string>('REDIS_URL');
    this.clientRedis = this.createClient();
  }

  get client(): Redis {
    return this.clientRedis;
  }

  private createClient(): Redis {
    return new Redis(this.url, {
      showFriendlyErrorStack: true,
    });
  }
}
