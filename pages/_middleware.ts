import { NextRequest, NextResponse } from "next/server";

const protectedRotues = ["/"];

// run before entering the index page

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  if (protectedRotues.includes(pathname)) {
    const token = req.cookies.ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
