import { z } from 'zod';
export declare const SignOutResponseSchema: z.ZodObject<{
    message: z.ZodBoolean;
    statusCode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: boolean;
    statusCode: number;
}, {
    message: boolean;
    statusCode: number;
}>;
export type TSignOutResponseSchema = z.infer<typeof SignOutResponseSchema>;
//# sourceMappingURL=sign-out.auth.d.ts.map