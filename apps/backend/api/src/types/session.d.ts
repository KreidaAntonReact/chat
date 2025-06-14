import 'express';
import { Session, SessionData } from 'express-session';

declare module 'express' {
  interface IUserSessionData {
    userId: string;
    username: string;
    firsName: string;
    lastName: string;
  }

  interface Request {
    session: Session & Partial<SessionData> & IUserSessionData;
  }
}
