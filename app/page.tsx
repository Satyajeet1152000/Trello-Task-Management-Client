import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();
    // redirect("/dashboard");
    return (
        <div>
            Hiiiiiiiiiiiiiiii
            <div>{JSON.stringify(session)}</div>
        </div>
    );
}
