import type { User as UserModel } from '@prisma/generated';

export interface ICreateUser extends Omit<UserModel, 'id' | 'createAt' | 'updateAt'> {}
