"use server";

export const getTaskList = async () => {
    // TODO: get token
    const token = "token";

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
