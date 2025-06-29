import { z } from 'zod';
export const meResponseSchema = z.object({
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
    }),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
    })
});
