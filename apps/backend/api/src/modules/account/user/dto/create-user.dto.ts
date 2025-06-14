import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import type { IUserCreate } from '@/modules/account/user/lib';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements IUserCreate {
  @ApiProperty({
    example: 'Владимир',
    description: 'User first name',
    required: true,
    type: String,
    minLength: 1,
  })
  @IsString({
    message: 'firsName must be a string',
  })
  @IsNotEmpty({
    message: 'firsName must not be empty',
  })
  @MinLength(1, {
    message: 'firsName must be at least 1 character long',
  })
  firsName: string;

  @ApiProperty({
    example: 'Кранштейн',
    description: 'User last name',
    required: true,
    type: String,
  })
  @IsString({
    message: 'lastName must be a string',
  })
  @IsNotEmpty({
    message: 'lastName must not be empty',
  })
  @MinLength(1, {
    message: 'lastName must be at least 1 character long',
  })
  lastName: string;

  @ApiProperty({
    example: 'vladimir',
    description: 'User username',
    required: true,
    type: String,
    minLength: 1,
  })
  @IsString({
    message: 'username must be a string',
  })
  @IsNotEmpty({
    message: 'username must not be empty',
  })
  @MinLength(1, {
    message: 'username must be at least 1 character long',
  })
  username: string;

  @ApiProperty({
    example: 'example@email.com',
    description: 'User email',
    required: true,
    type: String,
    minLength: 1,
  })
  @IsString({
    message: 'email must be a string',
  })
  @IsEmail(
    {},
    {
      message: 'email must be a valid email',
    },
  )
  @IsNotEmpty({
    message: 'email must not be empty',
  })
  @MinLength(1, {
    message: 'email must be at least 1 character long',
  })
  email: string;
}
