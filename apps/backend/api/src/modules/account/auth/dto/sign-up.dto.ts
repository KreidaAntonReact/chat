import { SignUpRequestSchema } from '@packages/contracts';
import { createZodDto } from 'nestjs-zod';

export class SignUpDto extends createZodDto(SignUpRequestSchema) {}
