"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
    href: string;
    label: string;
}
const LinkButton = ({ href, label }: BackButtonProps) => {
    return (
        <Button
            variant={"link"}
            className=" font-normal w-fit !p-0"
            size={"sm"}
            asChild
        >
            <Link href={href}>&nbsp;{label}</Link>
        </Button>
    );
};

export default LinkButton;
