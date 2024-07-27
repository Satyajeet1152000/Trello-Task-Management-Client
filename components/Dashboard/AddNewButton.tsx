import { CirclePlusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

const AddNewButton = () => {
    return (
        <Button className=" space-x-2 text-lg py-6 bg-gradient-to-b from-[#3A3A3A] to-[#202020] w-full flex items-center justify-between">
            <span>Create new</span> <PlusIcon className=" fill-[#202020] " />
        </Button>
    );
};

export default AddNewButton;
