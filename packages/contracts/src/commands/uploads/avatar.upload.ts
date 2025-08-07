import { ACCEPTED_IMAGE_TYPES, formatBytes, MAX_DIMENSIONS, MAX_FILE_SIZE, MIN_DIMENSIONS } from '@packages/utils';
import { z } from 'zod';

export const avatarUploadRequestSchema = z.object({
    file: z.instanceof(File).refine(file => file.size <= MAX_FILE_SIZE, {
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
})

export const avatarUploadResponseSchema = z.object({
    dir: z.string({
        invalid_type_error: 'Dir must be a string',
        required_error: 'Dir is required',
    }),
})

export type TAvatarUploadRequest = z.infer<typeof avatarUploadRequestSchema>;
export type TAvatarUploadResponse = z.infer<typeof avatarUploadResponseSchema>;
