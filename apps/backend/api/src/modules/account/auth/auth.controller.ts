import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import type { Request, Response } from 'express';

import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto';

import { Authorization, BadRequestError, SuccessResponse } from '@/shared';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign-up user' })
  @ApiBody({ type: SignUpDto })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestError,
  })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: SuccessResponse })
  @Post('/sign-up')
  async signUp(@Body() signInDto: SignUpDto): Promise<SuccessResponse> {
    return await this.authService.signUp(signInDto);
  }

  @ApiOperation({ summary: 'Sign-in user' })
  @ApiBody({ type: SignInDto })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    type: BadRequestError,
  })
  @ApiResponse({ status: 200, description: 'The user has been successfully signed in.', type: SuccessResponse })
  @Post('/sign-in')
  async signIn(@Req() req: Request, @Body() signInDto: SignInDto): Promise<SuccessResponse> {
    return await this.authService.signIn(req, signInDto);
  }

  @ApiOperation({ summary: 'Sign-out user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully signed out.', type: SuccessResponse })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    example: {
      statusCode: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
    },
  })
  @Authorization()
  @Get('/sign-out')
  async signOut(@Req() req: Request, @Res() res: Response): Promise<SuccessResponse> {
    return await this.authService.signOut(req, res);
  }
}
