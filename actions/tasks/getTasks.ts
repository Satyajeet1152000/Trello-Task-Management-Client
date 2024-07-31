"use server";

import { cookies } from "next/headers";

export const getTaskList = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    const response = await fetch(`${process.env.API_URL}/tasks`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();

    console.log(result);
};
