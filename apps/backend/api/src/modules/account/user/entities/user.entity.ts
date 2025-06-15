import { ApiProperty } from '@nestjs/swagger';
import bcrypt from 'bcrypt';
import type { User as UserModel } from '@prisma/generated';

type TUserEntity = Partial<UserModel> & Pick<UserModel, 'firsName' | 'lastName' | 'username' | 'email'>;

export class UserEntity implements TUserEntity {
  @ApiProperty({ example: '111-111-1', description: 'User id', required: false })
  id: string;

  @ApiProperty({ example: 'Владимир', description: 'User first name' })
  firsName: string;

  @ApiProperty({ example: 'Кранштейн', description: 'User last name' })
  lastName: string;

  @ApiProperty({ example: 'vladimir', description: 'User username' })
  username: string;

  @ApiProperty({ example: 'example@email.com', description: 'User email' })
  email: string;

  @ApiProperty({ example: '2025-06-15T02:02:02.000Z', description: 'User create date', required: false })
  createAt: Date;

  @ApiProperty({ example: '2025-06-15T02:02:02.000Z', description: 'User update date', required: false })
  updateAt: Date;

  @ApiProperty({ example: 'password', description: 'User password', required: false })
  passwordHash: string;

  constructor(user: TUserEntity) {
    this.firsName = user.firsName;
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
  }

  async generatePassword(password: string): Promise<void> {
    const MIN_SALT = 1;
    const MAX_SALT = 10;

    const saltRandomRound = Math.floor(Math.random() * (MAX_SALT - MIN_SALT + 1) + MIN_SALT);

    this.passwordHash = bcrypt.hashSync(password, saltRandomRound);
  }

  async checkPassword(password: string): Promise<boolean> {
    if (!this.passwordHash) {
      return false;
    }

    return bcrypt.compare(password, this.passwordHash);
  }
}
