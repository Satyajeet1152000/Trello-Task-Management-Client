/**
 * This middleware file invoke auth() function only on every matched routes.
 * It worked for both private and public routes.
 * So it makes entire application fully protected and it needs to be authorize to access it.
 */

import NextAuth from "next-auth";
import authConfig from "./auth.config";

// so here extracting auth from auth.config.ts not from auth.ts bcz we use non edge supported PrimaAdapter.
const { auth } = NextAuth(authConfig);

export default auth((req) => {
    return;
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
