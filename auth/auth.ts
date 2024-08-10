import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log("--------- Sign In -----------");
            console.log("user = ", user);

            if (account?.provider !== "credentials") return true;

            return true;
        },
        async session({ token, session }) {
            console.log("----------- Session -----------");
            console.log("token = ", token, "\nsession = ", session);
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            return session;
        },
        // async jwt({ token, user }) {
        //     console.log("------- token ---------------");

        //     console.log("token = ", token, "token.sub = ", token.sub);
        //     if (!token.sub) return null;

        //     const decodeToken = JSON.parse(atob(token.split('.')[1]))

        //     return token;
        // },
    },
    // session: {
    //     strategy: "jwt",
    // },
    ...authConfig,
});
