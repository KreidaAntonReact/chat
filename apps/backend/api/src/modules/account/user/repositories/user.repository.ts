import { Injectable } from '@nestjs/common';
import type { User as UserModel, Prisma } from '@prisma/generated';
import type { DefaultArgs } from 'prisma/generated/runtime/library';

import { PrismaService } from '@/core/prisma';

import { ICreateUser, IParamsFindUser } from '@/modules/account/user/lib/interfaces/';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: ICreateUser): Promise<UserModel> {
    return await this.prismaService.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
      },
    });
  }

  async findUser({ username, email, userId }: Partial<IParamsFindUser>): Promise<UserModel | null> {
    return await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
            },
          },
          {
            email: {
              equals: email,
            },
          },
          {
            id: {
              equals: userId,
            },
          },
        ],
      },
    });
  }

  async findAll(params?: Prisma.UserFindManyArgs<DefaultArgs>): Promise<UserModel[]> {
    return await this.prismaService.user.findMany(params);
  }

  async deleteById(userId: string): Promise<UserModel> {
    return await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
