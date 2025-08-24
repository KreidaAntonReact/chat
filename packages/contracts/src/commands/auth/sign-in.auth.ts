import { PASSWORD_REG } from '@/lib';
import { z } from 'zod';

export const SignInRequestSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required',
  }).min(1, {
    message: 'Username must be at least 3 characters long',
  }),
  password: z.string({
    invalid_type_error: 'Password must be a string',
    required_error: 'Password is required',
  }).regex(PASSWORD_REG, {
    message: 'Password must be at least 7 characters long and contain at least one letter and one number, and one special character: !@#$%^&*?_-',
  }),
});

export const SignInResponseSchema = z.object({
  id: z.string({
    invalid_type_error: 'Id must be a string',
    required_error: 'Id is required',
  }).uuid({
    message: 'Id is invalid',
  }),
  firstName: z.string({
    invalid_type_error: 'First name must be a string',
    required_error: 'First name is required',
  }),
  lastName: z.string({
    invalid_type_error: 'Last name must be a string',
    required_error: 'Last name is required',
  }),
 username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required',
 }).min(1, {
    message: 'Username must be at least 3 characters long',
 }),
  email: z.string({
    invalid_type_error: 'Email must be a string',
    required_error: 'Email is required',
  }).email({
    message: 'Email is invalid',
  }),
  avatar: z.string({
    invalid_type_error: 'Avatar must be a string',
    required_error: 'Avatar is required',
  }).nullable().optional(),
});


export type TSignInRequestSchema = z.infer<typeof SignInRequestSchema>;
export type TSignInResponseSchema = z.infer<typeof SignInResponseSchema>;
