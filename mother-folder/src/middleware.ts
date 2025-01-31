import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
  });
  const address = token?.sub ?? null;

  const currentUrl = req.nextUrl;

  if (address && currentUrl.pathname.startsWith("/connect-wallet")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!address && currentUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/connect-wallet", req.url));
  }
}

export const config = {
  matcher: ["/connect-wallet", "/dashboard"],
};
