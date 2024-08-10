import { LoginSchema } from "@/lib/schema";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (!validatedFields.success) return null;

                const response = await fetch(
                    `${process.env.API_URL}/auth/login`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const result = await response.json();

                console.log("----------- authorize ----------");
                console.log(result);

                if (!result.success) throw new Error(result.error);

                const user = {
                    id: result.id,
                    token: result.token,
                };
                return user;
            },
        }),
    ],
} satisfies NextAuthConfig;
