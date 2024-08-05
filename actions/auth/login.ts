"use server";

import { LoginSchema } from "@/lib/schema";
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

    return result;
};

export default login;
