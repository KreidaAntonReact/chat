import { Body, Controller, Get, HttpStatus, Patch, UploadedFile } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  meResponseSchema,
  type TUpdateUserResponse,
  updateUserResponseSchema,
  type TMeResponse,
} from '@packages/contracts';
import { memoryStorage } from 'multer';

import { UserUpdateDto } from '@/modules/account/user/dto';
import { UserService } from '@/modules/account/user/services';
import { Authorization, FileUpload, User } from '@/shared';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    example: {
      message: 'User not logged in',
      error: 'Unauthorized',
      statusCode: HttpStatus.UNAUTHORIZED,
    },
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
    example: { message: 'User not found', statusCode: HttpStatus.NOT_FOUND, error: 'Not Found' },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    example: {
      id: '111-111-1',
      firstName: 'Владимир',
      lastName: 'Кранштейн',
      username: 'vladimir',
      email: 'example@email.com',
    },
  })
  @Authorization()
  @Get('me')
  async getMe(@User('id') userId: string): Promise<TMeResponse> {
    return meResponseSchema.parse(await this.userService.getUser(userId));
  }

  @ApiOperation({ summary: 'Update current user' })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    example: { message: 'User not logged in', error: 'Unauthorized', statusCode: HttpStatus.UNAUTHORIZED },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
    example: {
      message: {
        username: 'username must be a string',
        email: 'email must be a string',
        firstName: 'firstName must be a string',
        lastName: 'lastName must be a string',
      },
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Bad Request',
    },
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User already exists.',
    example: { message: 'User with this email already exists', statusCode: HttpStatus.CONFLICT, error: 'Conflict' },
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
    example: { message: 'User not found', statusCode: HttpStatus.NOT_FOUND, error: 'Not Found' },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    example: {
      id: '111-111-1',
      firstName: 'Владимир',
      lastName: 'Кранштейн',
      username: 'vladimir',
      email: 'example@email.com',
    },
  })
  @Authorization()
  @FileUpload('avatar', {
    storage: memoryStorage(),
  })
  @Patch('update')
  async updateUser(
    @User('id') userId: string,
    @Body() userUpdateData: UserUpdateDto,
    @UploadedFile() avatar: Express.Multer.File,
  ): Promise<TUpdateUserResponse> {
    return updateUserResponseSchema.parse(await this.userService.updateUser(userId, userUpdateData));
  }
}
