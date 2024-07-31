import { PriorityType, StatusType } from "@/lib/schema";
import { getToken } from "../getToken";

interface UpdateTaskProps {
    title?: string;
    description?: string;
    status?: StatusType;
    priority?: PriorityType;
    favorite?: boolean;
    deadline?: Date;
}
export const updateTask = async (taskId: string, values: UpdateTaskProps) => {
    const token = await getToken();

    const response = await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
    });

    const result = await response.json();

    return result.data;
};
