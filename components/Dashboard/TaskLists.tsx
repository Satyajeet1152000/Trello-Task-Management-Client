"use client";
import React, { useState, useEffect } from "react";
import AddNewButton from "./AddNewButton";
import ListHeading from "./ListHeading";
import { ListSkeleton } from "../Skeleton";
import Task from "./Task";
import { getTasksFromDB, RecordType, StatusType } from "@/lib/apicall";

const TaskLists = () => {
    const [listRecords, setListRecords] = useState<RecordType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRecords = async () => {
            try {
                const data = await getTasksFromDB();
                setListRecords(data);
            } catch (error) {
                console.error("Error fetching records:", error);
            } finally {
                setLoading(false);
            }
        };

        loadRecords();
    }, []);

    const [dropData, setDropData] = useState<string[]>([]);

    function handleDraggedElement(id: string, status: string) {
        setDropData([id, status]);
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();

        // change border after drop finish on lists todo/inprogress/etc
        const style = e.currentTarget.style;
        style.borderColor = "#fff";
        style.boxShadow = "0 0 0 0 #fff";

        // Update lists and send it to data for update
        const sourceId = dropData[0];
        const sourceStatus = dropData[1];
        const targetStatus = e.currentTarget.id;

        if (sourceStatus !== targetStatus) {
            setListRecords((prevList) =>
                prevList.map((l) =>
                    l.id === sourceId
                        ? { ...l, status: targetStatus as StatusType }
                        : l
                )
            );

            // TODO: Update to Database
        }
    }

    // color change when drag over lists todo/inprogres/underreview/finished
    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        const style = e.currentTarget.style;
        style.borderColor = "#2F2188";
        style.boxShadow = "0 0 10px 1px #2F2188";
        // style.

        e.preventDefault();
    }

    // color change when drag leave lists todo/inprogres/underreview/finished
    function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
        // console.log(e.currentTarget.id);
        const style = e.currentTarget.style;
        style.borderColor = "#fff";
        style.boxShadow = "0 0 0 0 #fff";
        e.preventDefault();
    }

    return (
        <div className="flex gap-5 pb-10">
            <div
                id="todo"
                className=" flex-1 space-y-2 rounded-lg border-[2px] border-white ease-in-out transition-all duration-300"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <ListHeading heading="To do" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    listRecords
                        .filter((record) => record.status === "todo")
                        .map((d, i) => (
                            <Task
                                key={i}
                                data={d}
                                draggedElement={handleDraggedElement}
                            />
                        ))
                )}
                <AddNewButton />
            </div>

            <div
                id="inProgress"
                className="flex-1 space-y-2 rounded-lg border-[2px] border-white ease-in-out transition-all duration-300"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <ListHeading heading="In Progress" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    listRecords
                        .filter((record) => record.status === "inProgress")
                        .map((d, i) => (
                            <Task
                                key={i}
                                data={d}
                                draggedElement={handleDraggedElement}
                            />
                        ))
                )}
                <AddNewButton />
            </div>
            <div
                id="underReview"
                className="flex-1 space-y-2 rounded-lg border-[2px] border-white ease-in-out transition-all duration-300"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <ListHeading heading="Under Review" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    listRecords
                        .filter((record) => record.status === "underReview")
                        .map((d, i) => (
                            <Task
                                key={i}
                                data={d}
                                draggedElement={handleDraggedElement}
                            />
                        ))
                )}
                <AddNewButton />
            </div>
            <div
                id="finished"
                className="flex-1 space-y-2 rounded-lg border-[2px] border-white ease-in-out transition-all duration-300"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <ListHeading heading="Finished" />
                {loading ? (
                    <ListSkeleton />
                ) : (
                    listRecords
                        .filter((record) => record.status === "finished")
                        .map((d, i) => (
                            <Task
                                key={i}
                                data={d}
                                draggedElement={handleDraggedElement}
                            />
                        ))
                )}
                <AddNewButton />
            </div>
        </div>
    );
};

export default TaskLists;
