import { ACCEPTED_IMAGE_TYPES, formatBytes, MAX_DIMENSIONS, MAX_FILE_SIZE, MIN_DIMENSIONS } from '@packages/utils';
import { z } from 'zod';

export const updateUserRequestSchema = z.object({
    firstName: z.string({
        invalid_type_error: 'First name must be a string',
        required_error: 'First name is required',
    }).optional(),
    lastName: z.string({
        invalid_type_error: 'Last name must be a string',
        required_error: 'Last name is required',
    }).optional(),
    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
    }).email({
        message: 'Email is invalid',
    }).optional(),
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required',
    }).regex(/^[a-zA-Z0-9]+$/, {
        message: 'Username is invalid',
    }).optional(),
    avatar: z.string({
        invalid_type_error: 'Avatar must be a string',
        required_error: 'Avatar is required',
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
    }),
    avatar: z.string({
        invalid_type_error: 'Avatar must be a string',
        required_error: 'Avatar is required',
    }).optional(),
    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required',
    })
})

export type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
export type TUpdateUserResponse = z.infer<typeof updateUserResponseSchema>;

