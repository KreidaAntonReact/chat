import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { SignInDto } from './dto';
import { BadRequestError, SuccessResponse } from '@/shared';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign-up user' })
  @ApiBody({ type: SignInDto })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestError,
  })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: SuccessResponse })
  @Post('/sign-up')
  async signUp( @Body() signInDto: SignInDto): Promise<SuccessResponse> {
    return await this.authService.signUp(signInDto);
  }
}
