import { z } from 'zod';


export const CheckResponseSchema = z.object({
    message: z.boolean({
        invalid_type_error: 'Message must be a boolean',
        required_error: 'Message is required',
    }),
    statusCode: z.number({
        invalid_type_error: 'Status code must be a number',
        required_error: 'Status code is required',
    }),
});

export type TCheckResponse = z.infer<typeof CheckResponseSchema>;
