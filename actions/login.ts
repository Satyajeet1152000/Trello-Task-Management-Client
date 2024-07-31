"use server";

import { LoginSchema } from "@/lib/schema";
import { cookies } from "next/headers";
import { z } from "zod";

const login = async (values: z.infer<typeof LoginSchema>) => {
    const response = await fetch(`${process.env.API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    const result = await response.json();

    cookies().set("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    console.log("/login ---> Creating Session");
    return result;
};

export default login;
