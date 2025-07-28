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
                    const meetsDimensions = image.width >= MIN_DIMENSIONS.width &&
                        image.height >= MIN_DIMENSIONS.height &&
                        image.width <= MAX_DIMENSIONS.width &&
                        image.height <= MAX_DIMENSIONS.height;
                    resolve(meetsDimensions);
                };
                image.src = e.target?.result;
            };
            reader.readAsDataURL(file);
        });
    }, {
        message: `The image dimensions are invalid.
            Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height}
            and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
    })
        .optional(),
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
});
