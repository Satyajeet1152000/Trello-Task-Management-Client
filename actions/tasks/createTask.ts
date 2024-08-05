"use server";

import { z } from "zod";
import { CreateNewTaskSchema } from "@/lib/schema";

export const createTask = async (
    values: z.infer<typeof CreateNewTaskSchema>
) => {
    // TODO: get Token
    const token = "token";

    const response = await fetch(`${process.env.API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
    });

    const result = await response.json();

    return result;
};
