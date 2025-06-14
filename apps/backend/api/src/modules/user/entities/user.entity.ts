import { ApiProperty } from '@nestjs/swagger';
import type { IUserEntity } from '@/modules/user/lib';

export class UserEntity implements IUserEntity {
  @ApiProperty({ example: '111-111-1', description: 'User id' })
  id?: string;

  @ApiProperty({ example: 'Владимир', description: 'User first name' })
  firsName: string;

  @ApiProperty({ example: 'Кранштейн', description: 'User last name' })
  lastName: string;

  @ApiProperty({ example: 'vladimir', description: 'User username' })
  username: string;

  @ApiProperty({ example: 'example@email.com', description: 'User email' })
  email: string;

  constructor(user: IUserEntity) {
    this.firsName = user.firsName;
    this.lastName = user.lastName;
    this.username = user.username;
    this.email = user.email;
  }
}
