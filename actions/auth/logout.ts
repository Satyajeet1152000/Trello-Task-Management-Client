"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
    cookies().set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 0, // 1 week
    });

    // Redirect to login page
    redirect("/login");
}
