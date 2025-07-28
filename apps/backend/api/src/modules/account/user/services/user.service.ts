import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';

import { UserUpdateDto } from '@/modules/account/user/dto';
import { UserEntity } from '@/modules/account/user/entities';
import { UserRepository } from '@/modules/account/user/repositories';
import { UploadsService } from '@/modules/uploads/services';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploadsService: UploadsService,
  ) {}

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

  async updateUser(userId: string, userUpdateData: UserUpdateDto, avatar?: Express.Multer.File): Promise<UserEntity> {
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

    let filePath: null | string = null;

    if (avatar) {
      const FILE_NAME = `avatar.${userUpdateData?.username ?? findUser.username}`;

      filePath = await this.uploadsService.uploadFile(avatar, FILE_NAME, {
        fit: 'contain',
        width: 300,
        height: 300,
      });

      await this.uploadsService.deleteFile(findUser.avatar);
    }

    const updatedUser = await this.userRepository.updateUser(userId, {
      ...userUpdateData,
      avatar: filePath,
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
