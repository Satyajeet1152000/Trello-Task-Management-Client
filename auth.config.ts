import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                const user = {
                    name: "satyajeet singh",
                    email: "satyajeet1152000@gmail.com",
                    token: "tokrn",
                };

                if (!user) return null;

                return user;
            },
        }),
    ],
} satisfies NextAuthConfig;
