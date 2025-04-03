import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * An array of route paths that require user authentication or authorization
 * to access. These routes are considered protected and should only be
 * accessible to authenticated users.
 */
const protectedRoutes = [
  "/dashboard",
  "/expense",
  "/goal",
  "/income",
  "/profile",
  "/records",
  "/wallet",
];

/**
 * Middleware function to handle request redirection based on authentication token and URL path.
 *
 * @param request - The incoming `NextRequest` object containing request details.
 * @returns A `NextResponse` object that either redirects the user or allows the request to proceed.
 *
 * The middleware performs the following actions:
 * - If an authentication token exists and the user tries to access the login page ("/"),
 *   they are redirected to the "/dashboard" page.
 * - If no authentication token exists and the user tries to access a protected route,
 *   they are redirected to the "/not-found" page.
 * - If none of the above conditions are met, the request proceeds to the requested page.
 */
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const url = request.nextUrl.pathname;

  if (token && url === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && protectedRoutes.some((route) => url.startsWith(route))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

/**
 * Configuration object for middleware in a Next.js application.
 *
 * @property {string[]} matcher - An array of route patterns that the middleware will match.
 * The array includes the root route ("/") and dynamically maps over `protectedRoutes` to
 * generate patterns for each route with optional path segments (`:path*`).
 */
export const config = {
  matcher: ["/", ...protectedRoutes.map((route) => `${route}/:path*`)],
};
