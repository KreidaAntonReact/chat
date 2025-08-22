import { PASSWORD_REG, SignUpRequestSchema } from '@packages/contracts';
import { z } from 'zod';


export const SignUpFormSchema = SignUpRequestSchema.extend({
  confirmPassword: z.string({
    invalid_type_error: 'Confirm password must be a string',
    required_error: 'Confirm password is required',
  })
    .min(7, {
      message: 'Confirm password must be at least 7 characters long',
    })
    .regex(PASSWORD_REG, {
      message: 'Confirm password must be at least 7 characters long and contain at least one letter and one number, and one special character: !@#$%^&*?_-',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});


export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>;
