"use server";

import { getToken } from "../getToken";

export const deleteTask = async (taskId: string) => {
    const token = await getToken();

    const response = await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();

    return result;
};
