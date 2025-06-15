import type { User as UserModel } from '@prisma/generated';

export interface ISignIn extends Omit<UserModel, 'id' | 'createAt' | 'updateAt' | 'passwordHash'> {
  password: string;
}
