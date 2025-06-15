import { BadRequestException } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BadRequestError extends BadRequestException {
  @ApiProperty({
    example: {
      email: 'Email is required',
      password: 'Password is required',
    },
  })
  errors: Record<string, string>;

  @ApiProperty({
    example: 400,
  })
  statusCode: number = 400;

  @ApiProperty({
    example: 'Bad Request',
  })
  message: string = 'Bad Request';

  constructor(errors: Record<string, string>) {
    super();
    this.errors = errors;
  }
}
