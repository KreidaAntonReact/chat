import 'express';
import type { User as UserModel } from '@prisma/generated';
import type { Session, SessionData } from 'express-session';

declare module 'express' {
  interface IUserSessionData {
    userId: string;
    username: string;
  }

  interface Request {
    user?: UserModel;
    session: Session & Partial<SessionData> & IUserSessionData;
  }
}
