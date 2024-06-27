import { z } from "zod";

export const signupValidationScheam = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email().min(10),
    password: z.string().min(8)
});