"use client";

import { BellDot, ChevronsRight, Moon, Sun } from "lucide-react";
import LinkButton from "../LinkButton";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const Toolbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="text-gray-500 flex items-center justify-between py-2">
            <div className="flex gap-5">
                <Button variant={"ghost"} className="!p-0">
                    <BellDot />
                </Button>
                <Button
                    variant={"ghost"}
                    className="!p-0"
                    onClick={() => {
                        theme === "dark" ? setTheme("light") : setTheme("dark");
                    }}
                >
                    {theme === "dark" ? (
                        <Moon size={20} className="ml-auto" />
                    ) : (
                        <Sun size={20} className="ml-auto" />
                    )}
                </Button>
                <Button variant={"ghost"} className="!p-0">
                    <ChevronsRight />
                </Button>
            </div>
            <LinkButton
                label="Logout"
                href="/login"
                classname="text-lg text-gray-500"
            />
        </div>
    );
};

export default Toolbar;
