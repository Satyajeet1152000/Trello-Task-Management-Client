import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/login", // whatever something goes wrong then next auth redirect user to this page
        // error: "/auth/error", // and when something breaks then its shows this custom error page
    },
    callbacks: {
        async signIn({ user, account }) {
            return true;
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
    // callbacks are extremly useful to trigger specific nextAuth actions like signin, signout etc.
    ...authConfig,
});
