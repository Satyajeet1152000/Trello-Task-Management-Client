import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const loginUrl = new URL("/login", request.url);
    const dashboardUrl = new URL("/dashboard", request.url);

    if (!token) {
        if (
            request.nextUrl.pathname !== loginUrl.pathname &&
            request.nextUrl.pathname !== "/register"
        ) {
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    }

    try {
        const response = NextResponse.next();
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        if (
            request.nextUrl.pathname === loginUrl.pathname ||
            request.nextUrl.pathname === "/register"
        ) {
            return NextResponse.redirect(dashboardUrl);
        }

        return response;
    } catch (error) {
        // console.error("Token invalid or expired:", error);

        if (
            request.nextUrl.pathname !== loginUrl.pathname &&
            request.nextUrl.pathname !== "/register"
        ) {
            return NextResponse.redirect(loginUrl);
        }
        return NextResponse.next();
    }
}

// Apply middleware to the entire application
export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
