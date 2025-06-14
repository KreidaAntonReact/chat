import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/prisma/prisma.service';
import { UserEntity } from '@/modules/user/entities';
import { User as UserModel } from '@prisma/generated';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: UserEntity): Promise<UserModel> {
    return await this.prismaService.user.create({ data: user });
  }
}
