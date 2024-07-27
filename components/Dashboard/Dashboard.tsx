import React from "react";
import Header from "./Header";
import InfoBar from "./InfoBar";
import TasksListSection from "./TasksListSection";

const Dashboard = () => {
    const user = { name: "Satyajeet Singh" };
    return (
        <div className=" w-full h-full">
            <Header name={user.name} />
            <InfoBar />
            <TasksListSection />
        </div>
    );
};

export default Dashboard;
