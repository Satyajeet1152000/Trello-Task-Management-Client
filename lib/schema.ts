import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required.",
    }),
    password: z.string().min(1, {
        message: "Pasword is required.",
    }),
});

export const RegisterSchema = z.object({
    name: z.string({
        message: "Full name is required.",
    }),
    email: z.string().email({
        message: "Email is required.",
    }),
    password: z.string().min(1, {
        message: "Pasword is required.",
    }),
});
