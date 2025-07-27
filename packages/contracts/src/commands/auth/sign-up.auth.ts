import { ACCEPTED_IMAGE_TYPES, formatBytes, MAX_DIMENSIONS, MAX_FILE_SIZE, MIN_DIMENSIONS } from '@packages/utils';
import { z } from 'zod';

export const SignUpRequestSchema = z.object({
    firstName: z.string({
        invalid_type_error: 'First name must be a string',
        required_error: 'First name is required',
    }).min(1, {
        message: 'First name must be at least 1 character long',
    }),

    lastName: z.string({
        invalid_type_error: 'Last name must be a string',
        required_error: 'Last name is required',
    }).min(1, {
        message: 'Last name must be at least 1 character long',
    }),

    username: z.string({
        invalid_type_error: 'Username must be a string',
        required_error: 'Username is required',
    }).min(1, {
        message: 'Username must be at least 3 characters long',
    }).regex(/^[a-zA-Z0-9]+$/, {
        message: 'Username is invalid',
    }),

    password: z.string({
        invalid_type_error: 'Password must be a string',
        required_error: 'Password is required',
    }).min(7, {
        message: 'Password must be at least 7 characters long',
    })
   .regex(/(?=.*[A-Za-z])(?=.*[!@#$%^&*?_-])(?=.*\d)[A-Za-z\d!@#$%^&*?_-]{7,}/g, {
    message: 'Password must be at least 7 characters long and contain at least one letter and one number, and one special character: !@#$%^&*?_-',
    }),

    email: z.string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
    }).email({
        message: 'Email is invalid',
    }),
    avatar: z.instanceof(File).refine(file => file.size <= MAX_FILE_SIZE, {
        message: `Avatar size must be less than ${formatBytes(MAX_FILE_SIZE)}`,
    }).refine(file => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: 'Avatar type is invalid',
    }).refine(file => {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                const image = new Image();

                image.onload = () => {
                    const meetsDimensions =
                        image.width >= MIN_DIMENSIONS.width &&
                        image.height >= MIN_DIMENSIONS.height &&
                        image.width <= MAX_DIMENSIONS.width &&
                        image.height <= MAX_DIMENSIONS.height;

                    resolve(meetsDimensions);
                }
                image.src = e.target?.result as string;
            }
            reader.readAsDataURL(file);
        })
    }, {
        message: `The image dimensions are invalid.
        Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height}
        and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
    })
    .optional(),
})

export const SignUpResponseSchema = z.object({
    message: z.boolean({
        invalid_type_error: 'Message must be a boolean',
        required_error: 'Message is required',
    }),
    statusCode: z.number({
        invalid_type_error: 'Status code must be a number',
        required_error: 'Status code is required',
    }),
})

export type TSignUpRequestSchema = z.infer<typeof SignUpRequestSchema>;
export type TSignUpResponseSchema = z.infer<typeof SignUpResponseSchema>;
