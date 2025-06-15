import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: 'password',
    description: 'User password',
    required: true,
    type: String,
  })
  @IsString({
    message: 'password must be a string',
  })
  @IsNotEmpty({
    message: 'password must not be empty',
  })
  @MinLength(7, {
    message: 'password must be at least 7 characters long',
  })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
    message: 'password must be at least 7 characters long and contain at least one letter and one number',
  })
  password: string;

  @ApiProperty({
    example: 'vladimir',
    description: 'User username',
    required: true,
    type: String,
  })
  @IsString({
    message: 'username must be a string',
  })
  @IsNotEmpty({
    message: 'username must not be empty',
  })
  @MinLength(3, {
    message: 'username must be at least 3 characters long',
  })
  username: string;
}
