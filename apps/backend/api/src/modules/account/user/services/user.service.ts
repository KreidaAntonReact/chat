import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { UserUpdateDto } from '@/modules/account/user/dto';
import { UserEntity } from '@/modules/account/user/entities';
import { UserRepository } from '@/modules/account/user/repositories';

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

    const isFindUsernameUser = await this.userRepository.findUser({
      username: userUpdateData?.username,
    });

    if (isFindUsernameUser) {
      throw new ConflictException('User with this username already exists');
    }

    const isFindEmailUser = await this.userRepository.findUser({
      email: userUpdateData?.email,
    });

    if (isFindEmailUser) {
      throw new ConflictException('User with this email already exists');
    }

    const updatedUser = await this.userRepository.updateUser(userId, {
      ...userUpdateData,
    });

    const user = new UserEntity({
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      username: updatedUser.username,
      id: updatedUser.id,
      avatar: updatedUser.avatar,
    });

    return user;
  }
}
