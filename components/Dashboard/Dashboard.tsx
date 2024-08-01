"use client";
import Header from "./Header";
import InfoBar from "./InfoBar";
import TasksListSection from "./TasksListSection";
import CreateTaskModal from "../Create-New/CreateTaskModal";
import { useEffect, useState } from "react";
import { getUserData } from "@/actions/getUserData";
import { User } from "@/lib/schema";
import { ListUpdateProvider } from "@/context/ListUpdateContext";

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserData();
                setUser(data); // Update state with fetched data
            } catch (error) {
                console.error("Failed to fetch user data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ListUpdateProvider>
            <div className=" w-full h-full">
                <Header name={user?.name || ""} />
                <InfoBar />
                <TasksListSection />
                <CreateTaskModal />
            </div>
        </ListUpdateProvider>
    );
};

export default Dashboard;
