import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { Authorization, SuccessResponse } from '@/shared';

import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './dto';

import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign-up user' })
  @ApiBody({ type: SignUpDto })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User already exists.',
    example: { message: 'User with this email already exists', statusCode: HttpStatus.CONFLICT, error: 'Conflict' },
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
        password: 'password must be a string',
      },
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Bad Request',
    },
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
    type: SuccessResponse,
  })
  @Post('/sign-up')
  async signUp(@Body() signInDto: SignUpDto): Promise<SuccessResponse> {
    return await this.authService.signUp(signInDto);
  }

  @ApiOperation({ summary: 'Sign-in user' })
  @ApiBody({ type: SignInDto })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
    example: { message: 'User not found', statusCode: HttpStatus.NOT_FOUND, error: 'Not Found' },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
    example: {
      message: {
        username: 'username must be a string',
        password: 'password must be a string',
      },
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Bad Request',
    },
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully signed in.',
    type: SuccessResponse,
  })
  @Post('/sign-in')
  async signIn(@Req() req: Request, @Body() signInDto: SignInDto): Promise<SuccessResponse> {
    return await this.authService.signIn(req, signInDto);
  }

  @ApiOperation({ summary: 'Sign-out user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully signed out.',
    type: SuccessResponse,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized.',
    example: {
      statusCode: HttpStatus.UNAUTHORIZED,
      error: 'Unauthorized',
      message: 'Unauthorized',
    },
  })
  @Authorization()
  @Get('/sign-out')
  async signOut(@Req() req: Request, @Res() res: Response): Promise<SuccessResponse> {
    return await this.authService.signOut(req, res);
  }

  @ApiOperation({ summary: 'Check auth' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully signed out.',
    example: true,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized.',
    example: {
      statusCode: HttpStatus.UNAUTHORIZED,
      error: 'Unauthorized',
      message: 'Unauthorized',
    },
  })
  @Authorization()
  @Get('/check')
  async checkAuth(@Req() req: Request): Promise<boolean> {
    return await this.authService.checkSession(req);
  }
}
