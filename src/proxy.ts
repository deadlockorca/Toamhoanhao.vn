import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-site-locale", "en");
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: "/en" };
