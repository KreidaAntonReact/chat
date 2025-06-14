import { ValidationPipe } from '@nestjs/common';

class ConfigPipeValidation extends ValidationPipe {
  constructor() {
    super({
      transform: true,
    });
  }
}

export const configPipeValidation = new ConfigPipeValidation();
