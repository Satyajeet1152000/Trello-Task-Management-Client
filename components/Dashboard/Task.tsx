import { RecordType } from "@/lib/apicall";
import timeAgo from "@/lib/timeAgo";
import { cn } from "@/lib/utils";
import { Clock3, Star } from "lucide-react";
import React from "react";

const Task = ({
    title,
    description,
    priority,
    deadline,
    favorite,
    createdAt,
}: RecordType) => {
    return (
        <div className="border-2 border-gray-200 rounded-lg flex flex-col p-3 gap-3">
            {/* title and favrite icon */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-gray-600 font-semibold text-wrap">
                    {title}
                </h1>
                <Star
                    className={cn("text-gray-300", {
                        "text-yellow-500 fill-yellow-500": favorite,
                    })}
                />
            </div>

            <p className=" text-lg text-gray-600 w-full text-wrap">
                {description}
            </p>

            {/* Priority */}
            <div className=" w-full">
                <div
                    className={cn("w-fit px-3 py-1 text-white rounded-lg", {
                        "bg-[#0ECC5A]": priority === "Low",
                        "bg-[#ece13f]": priority === "Medium",
                        "bg-[#f5872d]": priority === "High",
                        "bg-[#e04b4b]": priority === "Urgent",
                    })}
                >
                    {priority}
                </div>
            </div>

            {/* deadline */}
            <div className="flex space-x-2 text-gray-600 text-lg">
                <Clock3 /> <span>{deadline.toLocaleDateString("fr-CA")}</span>
            </div>

            {/* timeAgo */}

            <div className="text-gray-500">{timeAgo(createdAt)} ago</div>
        </div>
    );
};

export default Task;
