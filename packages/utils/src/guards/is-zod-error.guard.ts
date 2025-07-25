import { z } from 'zod';

export const isZodError = (error: unknown): error is z.ZodError => (error instanceof z.ZodError);
