import { z } from 'zod';

export const updateUserRequestSchema = z.object({
    firsName: z.string({
        invalid_type_error: 'First name must be a string',
        required_error: 'First name is required',
    }).optional(),
    lastName: z.string({
        invalid_type_error: 'Last name must be a string',
        required_error: 'Last name is required',
    }).optional(),
    password: z.string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
    }).min(7, {
        message: 'Password must be at least 7 characters long',
    })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/, {
        message: 'Username must be at least 7 characters long and contain at least one letter and one number',
    }).optional(),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
    }).email({
        message: 'Email is invalid',
    }).optional(),
});

export const updateUserResponseSchema = z.object({
    id: z.string({
        invalid_type_error: 'Id must be a string',
        required_error: 'Id is required',
    }).uuid({
        message: 'Id is invalid',
    }),
    firsName: z.string({
        invalid_type_error: 'First name must be a string',
        required_error: 'First name is required',
    }),
    lastName: z.string({
        invalid_type_error: 'Last name must be a string',
        required_error: 'Last name is required',
    }),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
    }).email({
        message: 'Email is invalid',
    })
})

export type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
export type TUpdateUserResponse = z.infer<typeof updateUserResponseSchema>;

