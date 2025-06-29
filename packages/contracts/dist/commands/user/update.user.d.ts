import { z } from 'zod';
export declare const updateUserRequestSchema: z.ZodObject<{
    firsName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastName?: string | undefined;
    username?: string | undefined;
    email?: string | undefined;
    firsName?: string | undefined;
}, {
    lastName?: string | undefined;
    username?: string | undefined;
    email?: string | undefined;
    firsName?: string | undefined;
}>;
export declare const updateUserResponseSchema: z.ZodObject<{
    id: z.ZodString;
    firsName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    lastName: string;
    email: string;
    firsName: string;
    id: string;
}, {
    lastName: string;
    email: string;
    firsName: string;
    id: string;
}>;
export type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
export type TUpdateUserResponse = z.infer<typeof updateUserResponseSchema>;
//# sourceMappingURL=update.user.d.ts.map