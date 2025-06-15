import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import type { ISignIn } from '@/modules/account/user/lib';

export class SignInDto implements ISignIn {
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

  @ApiProperty({
    example: 'password',
    description: 'User password',
    required: true,
    type: String,
    minLength: 7,
  })
  @IsString({
    message: 'password must be a string',
  })
  @IsNotEmpty({
    message: 'password must not be empty',
  })
  @MinLength(7, {
    message: 'password must be at least 7 character long',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
    message: 'password must contain at least one letter and one number',
  })
  password: string;
}
