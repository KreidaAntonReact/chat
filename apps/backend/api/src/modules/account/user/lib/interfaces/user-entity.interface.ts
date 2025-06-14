import type { User as UserModel } from '@prisma/generated';

export interface IUserEntity extends Omit<UserModel, 'id'> {}
