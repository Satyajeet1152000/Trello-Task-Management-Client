"use client";

import { BellDot, ChevronsRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { logout } from "@/actions/auth/logout";
import useMount from "@/hooks/useMount";

const Toolbar = () => {
    const { theme, setTheme } = useTheme();
    const mount = useMount();
    if (!mount) return null;
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
            <form
                action={async () => {
                    await logout();
                }}
            >
                <Button
                    type="submit"
                    variant={"link"}
                    className="text-lg text-gray-500"
                >
                    Logout
                </Button>
            </form>
        </div>
    );
};

export default Toolbar;
