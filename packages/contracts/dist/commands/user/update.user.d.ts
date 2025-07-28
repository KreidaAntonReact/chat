import { z } from 'zod';
export declare const updateUserRequestSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodType<File, z.ZodTypeDef, File>, File, File>, File, File>, File, File>>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    avatar?: File | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    avatar?: File | undefined;
}>;
export declare const updateUserResponseSchema: z.ZodObject<{
    id: z.ZodString;
    firsName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    lastName: string;
    email: string;
    username: string;
    id: string;
    firsName: string;
    avatar?: string | undefined;
}, {
    lastName: string;
    email: string;
    username: string;
    id: string;
    firsName: string;
    avatar?: string | undefined;
}>;
export type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
export type TUpdateUserResponse = z.infer<typeof updateUserResponseSchema>;
//# sourceMappingURL=update.user.d.ts.map