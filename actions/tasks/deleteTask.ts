"use server";

export const deleteTask = async (taskId: string) => {
    // TODO: get token
    const token = "token";

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
