import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class UserUpdateDto {
  @ApiProperty({
    example: 'Владимир',
    description: 'User first name',
    required: false,
  })
  @IsString({
    message: 'firsName must be a string',
  })
  @MinLength(1, {
    message: 'firstName must be at least 1 character long',
  })
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    example: 'Кранштейн',
    description: 'User last name',
    required: false,
  })
  @IsString({
    message: 'lastName must be a string',
  })
  @MinLength(1, {
    message: 'lastName must be at least 1 character long',
  })
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    example: 'example@email.com',
    description: 'User email',
    required: false,
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
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: 'vladimir',
    description: 'User username',
    required: false,
  })
  @IsString({
    message: 'username must be a string',
  })
  @MinLength(1, {
    message: 'username must be at least 1 character long',
  })
  @IsOptional()
  username?: string;
}
