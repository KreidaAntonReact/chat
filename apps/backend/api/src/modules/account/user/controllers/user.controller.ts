import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { meResponseSchema, TmeResponse, TUpdateUserResponse, updateUserResponseSchema } from '@packages/contracts';

import { UserUpdateDto } from '@/modules/account/user/dto';
import { UserService } from '@/modules/account/user/services';
import { Authorization, User } from '@/shared';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get current user' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    example: {
      message: 'User not logged in',
      error: 'Unauthorized',
      statusCode: 401,
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
    example: { message: 'User not found', statusCode: 404, error: 'Not Found' },
  })
  @ApiResponse({
    status: 200,
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
  async getMe(@User('id') userId: string): Promise<TmeResponse> {
    return meResponseSchema.parse(await this.userService.getUser(userId));
  }

  @ApiOperation({ summary: 'Update current user' })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    example: { message: 'User not logged in', error: 'Unauthorized', statusCode: 401 },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
    example: { message: 'User not found', statusCode: 404, error: 'Not Found' },
  })
  @ApiResponse({
    status: 200,
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
  @Patch('update')
  async updateUser(@User('id') userId: string, @Body() userUpdateData: UserUpdateDto): Promise<TUpdateUserResponse> {
    return updateUserResponseSchema.parse(await this.userService.updateUser(userId, userUpdateData));
  }
}
