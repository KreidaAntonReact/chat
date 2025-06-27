import { SignInRequestSchema } from '@packages/contracts';
import { createZodDto } from 'nestjs-zod';

export class SignInDto extends createZodDto(SignInRequestSchema) {}
