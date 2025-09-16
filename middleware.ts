import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LOCALE_BY_HOST: Record<string, "it" | "en"> = {
  "www.ingcostagliolasimone.it": "it",
  "ingcostagliolasimone.it": "it",
  "www.engcostagliolasimone.com": "en",
  "engcostagliolasimone.com": "en",
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") || "";
  const origin = req.nextUrl.origin;

  // Allow Next internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/it/") || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  const locale = DEFAULT_LOCALE_BY_HOST[host] || "it";
  return NextResponse.redirect(`${origin}/${locale}${pathname}`);
}

export const config = {
  matcher: ["/((?!api|_next|.*\..*).*)"],
};
