import { z } from 'zod';
export declare const CheckResponseSchema: z.ZodObject<{
    message: z.ZodBoolean;
    statusCode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: boolean;
    statusCode: number;
}, {
    message: boolean;
    statusCode: number;
}>;
export type TCheckResponse = z.infer<typeof CheckResponseSchema>;
//# sourceMappingURL=check.auth.d.ts.map