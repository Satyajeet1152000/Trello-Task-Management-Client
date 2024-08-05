"use server";

import { PriorityType, StatusType } from "@/lib/schema";
interface UpdateTaskProps {
    title?: string;
    description?: string;
    status?: StatusType;
    priority?: PriorityType;
    favorite?: boolean;
    deadline?: Date;
}
export const updateTask = async (taskId: string, values: UpdateTaskProps) => {
    // TODO: get token
    const token = "token";

    const response = await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
    });

    const result = await response.json();

    return result;
};
