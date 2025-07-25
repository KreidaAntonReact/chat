import { z } from 'zod';
export const isZodError = (error) => (error instanceof z.ZodError);
