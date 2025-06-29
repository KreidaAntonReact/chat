import { Injectable, NotFoundException } from '@nestjs/common';

import { UserUpdateDto } from '../dto';
import { UserEntity } from '../entities';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(userId: string): Promise<UserEntity> {
    const findUser = await this.userRepository.findUser({ userId });

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    const user = new UserEntity({
      email: findUser.email,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      username: findUser.username,
      id: findUser.id,
    });

    return user;
  }

  async updateUser(userId: string, userUpdateData: UserUpdateDto): Promise<UserEntity> {
    const findUser = await this.userRepository.findUser({ userId });

    if (!findUser) {
      throw new NotFoundException('User not found');
    }

    const updatedUser = await this.userRepository.updateUser(userId, userUpdateData);

    const user = new UserEntity({
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      username: updatedUser.username,
      id: updatedUser.id,
    });

    return user;
  }
}
