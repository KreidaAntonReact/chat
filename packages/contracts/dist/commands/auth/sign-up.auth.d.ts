import { z } from 'zod';
export declare const SignUpRequestSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}, {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}>;
export declare const SignUpResponseSchema: z.ZodObject<{
    message: z.ZodBoolean;
    statusCode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    message: boolean;
    statusCode: number;
}, {
    message: boolean;
    statusCode: number;
}>;
export type TSignUpRequestSchema = z.infer<typeof SignUpRequestSchema>;
export type TSignUpResponseSchema = z.infer<typeof SignUpResponseSchema>;
//# sourceMappingURL=sign-up.auth.d.ts.map