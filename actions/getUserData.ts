"use server";

import { User } from "@/lib/schema";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");

// Fetch user data on the server side
export const getUserData = async (): Promise<User | null> => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, secret);
        return {
            token,
            id: payload.id as string,
            name: payload.name as string,
            email: payload.email as string,
        };
    } catch (error) {
        return null;
    }
};
