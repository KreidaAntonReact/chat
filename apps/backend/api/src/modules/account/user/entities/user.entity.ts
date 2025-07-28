import * as bcrypt from 'bcrypt';

import type { User as UserModel } from '@prisma/generated';

type TUserEntity = Partial<UserModel> & Pick<UserModel, 'firstName' | 'lastName' | 'username' | 'email'>;

export class UserEntity implements TUserEntity {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatar?: string;
  createAt?: Date;
  updateAt?: Date;
  passwordHash?: string;

  constructor(user: TUserEntity) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;

    if (user?.id) {
      this.id = user.id;
    }

    if (user?.passwordHash) {
      this.passwordHash = user.passwordHash;
    }

    if (user?.createAt) {
      this.createAt = user.createAt;
    }

    if (user?.updateAt) {
      this.updateAt = user.updateAt;
    }

    if (user?.avatar) {
      this.avatar = user.avatar;
    }
  }

  async generatePassword(password: string): Promise<string> {
    const MIN_SALT = 1;
    const MAX_SALT = 10;

    const saltRandomRound = Math.floor(Math.random() * (MAX_SALT - MIN_SALT + 1) + MIN_SALT);

    const passwordHash = await bcrypt.hash(password, saltRandomRound);

    this.passwordHash = passwordHash;

    return passwordHash;
  }

  async checkPassword(password: string): Promise<boolean> {
    if (!this?.passwordHash) {
      return false;
    }

    return await bcrypt.compare(password, this.passwordHash);
  }
}
