"use client";
import { CirclePlusIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";
import Toolbar from "./Toolbar";
import { Button } from "../ui/button";
import Menus from "./Menus";
import { useModal } from "@/context/ModelContext";

const Navbar = () => {
    const { showModal } = useModal();

    // TODO: get Usernmae
    const user = { name: "Satyajeet Singh" };

    return (
        <div className="px-3 py-5 space-y-2  fixed">
            <div>
                <UserAvatar
                    user={{
                        image: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
                        name: user.name,
                    }}
                />
                <Toolbar />
            </div>
            <Menus />
            <Button
                className=" space-x-2 w-full text-lg dark:text-white py-6 bg-gradient-to-b from-[#4C38C2] to-[#2F2188]"
                onClick={() =>
                    showModal({
                        taskOperation: "create",
                        _id: "",
                        title: "",
                        status: "todo",
                        priority: "low",
                        deadline: new Date(),
                        description: "",
                        favorite: false,
                        user: "",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    })
                }
            >
                <span>Create new task</span>{" "}
                <CirclePlusIcon className=" fill-white text-[#2F2188]" />
            </Button>
        </div>
    );
};

export default Navbar;
