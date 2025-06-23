import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

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
