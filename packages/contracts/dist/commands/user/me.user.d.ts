import { z } from 'zod';
export declare const meResponseSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}, {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}>;
export type TMeResponse = z.infer<typeof meResponseSchema>;
//# sourceMappingURL=me.user.d.ts.map