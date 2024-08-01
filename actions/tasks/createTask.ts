"use server";

import { z } from "zod";
import { getToken } from "../getToken";
import { CreateNewTaskSchema } from "@/lib/schema";

export const createTask = async (
    values: z.infer<typeof CreateNewTaskSchema>
) => {
    const token = await getToken();

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
