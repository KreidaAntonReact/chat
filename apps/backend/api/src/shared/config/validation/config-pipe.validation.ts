import { BadRequestException, ValidationPipe } from '@nestjs/common';

import type { ValidationError } from '@nestjs/common';

class ConfigPipeValidation extends ValidationPipe {
  constructor() {
    super({
      transform: true,
    });

    this.exceptionFactory = (errors: ValidationError[]) => {
      const listError = errors.map((error) => ({
        property: error.property,
        message: Object.values(error?.constraints ?? [])[0],
      }));

      const errorObject = listError.reduce((acc, error) => {
        acc[error.property] = error.message;

        return acc;
      }, {});

      const errorResponse = {
        statusCode: 400,
        message: 'Bad Request',
        error: errorObject,
      };

      throw new BadRequestException(errorResponse);
    };
  }
}

export const configPipeValidation = new ConfigPipeValidation();
