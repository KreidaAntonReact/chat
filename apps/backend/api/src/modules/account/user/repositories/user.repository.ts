import { Injectable } from '@nestjs/common';
import type { User as UserModel, Prisma } from '@prisma/generated';
import type { DefaultArgs } from 'prisma/generated/runtime/library';

import { PrismaService } from '@/core/prisma';

import { UserEntity } from '@/modules/account/user/entities';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: UserEntity): Promise<UserModel> {
    return await this.prismaService.user.create({ data: user });
  }

  async findById(userId: string): Promise<UserModel | null> {
    return await this.prismaService.user.findFirst({
      where: {
        id: {
          equals: userId,
        },
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
