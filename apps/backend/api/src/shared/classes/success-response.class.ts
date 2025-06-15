import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse {
  @ApiProperty({
    example: true,
  })
  message: boolean = true;

  @ApiProperty({
    example: 200,
  })
  statusCode: number = 200;

  constructor(statusCode: number = 200) {
    this.message = true;
    this.statusCode = statusCode;
  }
}
