"use server";
import { redirect } from "next/navigation";

export async function logout() {
    // Redirect to login page
    redirect("/login");
}
