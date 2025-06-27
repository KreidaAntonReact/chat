import { z } from 'zod';
export declare const SignInRequestSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const SignInResponseSchema: z.ZodObject<{
    message: z.ZodBoolean;
    statusCode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: boolean;
    statusCode: number;
}, {
    message: boolean;
    statusCode: number;
}>;
export type TSignInRequestSchema = z.infer<typeof SignInRequestSchema>;
export type TSignInResponseSchema = z.infer<typeof SignInResponseSchema>;
//# sourceMappingURL=sign-in.auth.d.ts.map