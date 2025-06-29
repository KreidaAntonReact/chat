import { updateUserRequestSchema } from '@packages/contracts';
import { createZodDto } from 'nestjs-zod';

export class UserUpdateDto extends createZodDto(updateUserRequestSchema) {}
