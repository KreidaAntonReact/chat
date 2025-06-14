import type { User as UserModel } from '@prisma/generated';

export interface IUserCreate extends Omit<UserModel, 'id'> {}
