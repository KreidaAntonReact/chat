import type { Request } from 'express';

export interface ISessionRedis extends Pick<Request, 'session'> {
  id: string;
}
