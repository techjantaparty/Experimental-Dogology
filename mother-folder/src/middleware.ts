import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
  });

  const currentUrl = req.nextUrl;

  // client side redirect

  if (
    token &&
    (currentUrl.pathname.startsWith("/login") ||
      currentUrl.pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && currentUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/signup", "/login", "/dashboard"],
};
