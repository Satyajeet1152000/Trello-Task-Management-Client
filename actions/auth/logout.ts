"use server";
import { signOut } from "@/auth/auth";
import { redirect } from "next/navigation";

export async function logout() {
    // Redirect to login page
    // redirect("/login");
    signOut({ redirectTo: "/login" });
}
