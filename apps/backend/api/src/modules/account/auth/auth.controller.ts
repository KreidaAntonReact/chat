import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';

import { AuthService } from './auth.service';
import { SignInDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign-up user' })
  @ApiBody({ type: SignInDto })
  @ApiResponse({ status: 409, description: 'User already exists.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 200, description: 'The user has been successfully created.', type: Boolean })
  @Post('/sign-up')
  async signUp(@Req() req: Request, @Body() signInDto: SignInDto): Promise<boolean> {
    return await this.authService.signUp(signInDto, req);
  }
}
