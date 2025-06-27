import { BadRequestException, HttpStatus } from '@nestjs/common';
import { createZodValidationPipe } from 'nestjs-zod';

import type { ZodError } from 'zod';

export const zodValidationConfig = createZodValidationPipe({
  createValidationException: (error: ZodError) => {
    const errors = error.errors.reduce((acc, error) => {
      acc[error.path[0]] = error.message;
      return acc;
    }, {});

    const errorResponse = {
      message: errors,
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Bad Request',
    };

    return new BadRequestException(errorResponse);
  },
});
