"use client";
import React, { useState, useEffect } from "react";
import AddNewButton from "./AddNewButton";
import ListHeading from "./ListHeading";
import { ListSkeleton } from "../Skeleton";
import Task from "./Task";
import { getTasksFromDB, RecordType } from "@/lib/apicall";

const TaskLists = () => {
    const [todoList, setTodoList] = useState<RecordType[]>([]);
    const [inProgressList, setInProgressList] = useState<RecordType[]>([]);
    const [underReviewList, setUnderReviewList] = useState<RecordType[]>([]);
    const [finishedList, setFinishedList] = useState<RecordType[]>([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        };

        loadRecords();
    }, []);

    return (
        <div className="flex gap-5 pb-10">
            <div className="flex-grow space-y-2">
                <ListHeading heading="To do" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    todoList.map((d, i) => <Task key={i} {...d} />)
                )}
                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="In Progress" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    inProgressList.map((d, i) => <Task key={i} {...d} />)
                )}
                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="Under Review" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    underReviewList.map((d, i) => <Task key={i} {...d} />)
                )}
                <AddNewButton />
            </div>
            <div className="flex-grow space-y-2">
                <ListHeading heading="Finished" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    finishedList.map((d, i) => <Task key={i} {...d} />)
                )}
                <AddNewButton />
            </div>
        </div>
    );
};

export default TaskLists;
