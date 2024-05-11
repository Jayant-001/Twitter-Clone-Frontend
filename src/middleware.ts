import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./hooks/custom-hooks";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const token = request.cookies.get("twitter_token")?.value;

    // Verify the token and get user data
    const user = token ? verifyToken(token) : null;

    // If there's no user and the pathname isn't '/login', redirect to the login page
    if (!user && request.nextUrl.pathname !== "/login") {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }

    // If the user is trying to access a restricted page like '/create', handle it here
    // if (user && request.nextUrl.pathname === "/create") {
    //     // Allow the user to continue to the create page
    //     return NextResponse.next();
    // }

    // return NextResponse.next();

    const url = request.nextUrl.clone();
    url.pathname = request.nextUrl.pathname;
    return NextResponse.rewrite(url);
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/login", "/profile/:user*", "/notifications"],
};
