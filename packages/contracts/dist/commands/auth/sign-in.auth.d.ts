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
    id: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string | undefined;
}, {
    username: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string | undefined;
}>;
export type TSignInRequestSchema = z.infer<typeof SignInRequestSchema>;
export type TSignInResponseSchema = z.infer<typeof SignInResponseSchema>;
//# sourceMappingURL=sign-in.auth.d.ts.map