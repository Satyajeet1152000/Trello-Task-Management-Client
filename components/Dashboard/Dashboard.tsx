import React from "react";
import Header from "./Header";
import InfoBar from "./InfoBar";

const Dashboard = () => {
    const user = { name: "Satyajeet Singh" };
    return (
        <div className=" w-full h-full">
            <Header name={user.name} />
            <InfoBar />
        </div>
    );
};

export default Dashboard;
