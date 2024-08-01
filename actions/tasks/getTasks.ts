"use server";

import { getToken } from "../getToken";

export const getTaskList = async () => {
    const token = await getToken();

    const response = await fetch(`${process.env.API_URL}/tasks`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();

    return result;
};
