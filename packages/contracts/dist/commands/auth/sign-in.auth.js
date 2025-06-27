import { z } from 'zod';
export const SignInRequestSchema = z.object({
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required',
    }).min(3, {
        message: 'Username must be at least 3 characters long',
    }),
    password: z.string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
    }).min(7, {
        message: 'Password must be at least 7 characters long',
    })
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
        message: 'Username must be at least 7 characters long and contain at least one letter and one number',
    }),
});
export const SignInResponseSchema = z.object({
    message: z.boolean({
        invalid_type_error: 'Message must be a boolean',
        required_error: 'Message is required',
    }),
    statusCode: z.number({
        invalid_type_error: 'Status code must be a number',
        required_error: 'Status code is required',
    }),
});
