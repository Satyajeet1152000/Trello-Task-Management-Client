import { RecordType } from "@/lib/apicall";
import timeAgo from "@/lib/timeAgo";
import { cn } from "@/lib/utils";
import { Clock3, Star } from "lucide-react";
import React from "react";

interface TaskProps {
    data: RecordType;
    draggedElement: (id: string, status: string) => void;
}
const Task = ({ data, draggedElement }: TaskProps) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        target.style.backgroundColor = "#d1d5db";

        return draggedElement(data.id, data.status);
    };
    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        target.style.backgroundColor = "white";
    };

    return (
        <div
            className={cn(
                "border-2 border-gray-200 rounded-lg flex flex-col p-3 gap-3",
                {}
            )}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            {/* title and favrite icon */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600 font-semibold text-wrap">
                    {data.title}
                </h1>
                <Star
                    className={cn("text-gray-300", {
                        "text-yellow-500 fill-yellow-500": data.favorite,
                    })}
                />
            </div>

            <p className=" text-lg text-gray-600 w-full text-wrap">
                {data.description}
            </p>

            {/* Priority */}
            <div className=" w-full">
                <div
                    className={cn("w-fit px-3 py-1 text-white rounded-lg", {
                        "bg-[#0ECC5A]": data.priority === "Low",
                        "bg-[#ece13f]": data.priority === "Medium",
                        "bg-[#f5872d]": data.priority === "High",
                        "bg-[#e04b4b]": data.priority === "Urgent",
                    })}
                >
                    {data.priority}
                </div>
            </div>

            {/* deadline */}
            <div className="flex space-x-2 text-gray-600 text-lg">
                <Clock3 />{" "}
                <span>{data.deadline.toLocaleDateString("fr-CA")}</span>
            </div>

            {/* timeAgo */}

            <div className="text-gray-500">{timeAgo(data.createdAt)} ago</div>
        </div>
    );
};

export default Task;
