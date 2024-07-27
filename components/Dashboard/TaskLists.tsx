"use client";
import { useEffect, useState } from "react";
import ListHeading from "./ListHeading";
import { getTasksFromDB, RecordType } from "@/lib/apicall";
import Task from "./Task";
import AddNewButton from "./AddNewButton";

const TaskLists = () => {
    const [todoList, setTodoList] = useState<RecordType[]>([]);
    const [inProgressList, setInProgressList] = useState<RecordType[]>([]);
    const [underReviewList, setUnderReviewList] = useState<RecordType[]>([]);
    const [finishedList, setFinishedList] = useState<RecordType[]>([]);

    useEffect(() => {
        const loadRecords = async () => {
            try {
                const data = await getTasksFromDB();
                setTodoList(data.filter((record) => record.status === "todo"));
                setInProgressList(
                    data.filter((record) => record.status === "inProgress")
                );
                setUnderReviewList(
                    data.filter((record) => record.status === "underReview")
                );
                setFinishedList(
                    data.filter((record) => record.status === "finished")
                );
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };

        loadRecords();
    }, []);

    return (
        <div className="flex gap-5 pb-10">
            <div className="flex-grow space-y-2">
                <ListHeading heading="To do" />
                {todoList.map((d, i) => (
                    <Task key={i} {...d} />
                ))}

                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="In Progress" />
                {inProgressList.map((d, i) => (
                    <Task key={i} {...d} />
                ))}

                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="Under Review" />
                {underReviewList.map((d, i) => (
                    <Task key={i} {...d} />
                ))}

                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="Finished" />
                {finishedList.map((d, i) => (
                    <Task key={i} {...d} />
                ))}

                <AddNewButton />
            </div>
        </div>
    );
};

export default TaskLists;
