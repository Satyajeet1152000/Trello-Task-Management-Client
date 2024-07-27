import { CirclePlusIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";
import Toolbar from "./Toolbar";
import { Button } from "../ui/button";
import Menus from "./Menus";

const Navbar = () => {
    return (
        <div className="px-3 py-5 space-y-2">
            <div>
                <UserAvatar
                    user={{
                        image: "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
                        name: "Satyajeet Singh",
                    }}
                />
                <Toolbar />
            </div>
            <Menus />
            <Button className=" space-x-2 w-full text-lg py-6 bg-gradient-to-b from-[#4C38C2] to-[#2F2188]">
                <span>Create new task</span>{" "}
                <CirclePlusIcon className=" fill-white text-[#2F2188]" />
            </Button>
        </div>
    );
};

export default Navbar;
