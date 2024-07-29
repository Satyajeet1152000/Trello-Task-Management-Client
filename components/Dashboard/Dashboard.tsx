"use client";
import Header from "./Header";
import InfoBar from "./InfoBar";
import TasksListSection from "./TasksListSection";
import CreateTaskModal from "../Create-New/CreateTaskModal";
import { ModalProvider } from "@/context/ModelContext";

const Dashboard = () => {
    const user = { name: "Satyajeet Singh" };
    return (
        <ModalProvider>
            <div className=" w-full h-full">
                <Header name={user.name} />
                <InfoBar />
                <TasksListSection />
                <CreateTaskModal />
            </div>
        </ModalProvider>
    );
};

export default Dashboard;
