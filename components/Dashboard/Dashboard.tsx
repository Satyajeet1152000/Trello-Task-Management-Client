import React from "react";
import Header from "./Header";

const Dashboard = () => {
    const user = { name: "Satyajeet Singh" };
    return (
        <div className=" w-full h-full">
            <Header name={user.name} />
        </div>
    );
};

export default Dashboard;
