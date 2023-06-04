import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = { matcher: ["/login"] };

export async function middleware(req: NextRequest) {
  const session = await getToken({ req });
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
