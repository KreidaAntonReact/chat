import { z } from 'zod';
export declare const meResponseSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string | undefined;
}, {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string | undefined;
}>;
export type TMeResponse = z.infer<typeof meResponseSchema>;
//# sourceMappingURL=me.user.d.ts.map