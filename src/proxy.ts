import { NextResponse, type NextRequest } from "next/server";
import { isSiteLocale } from "@/lib/locale";

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);
  const locale = request.nextUrl.pathname.slice(1);
  if (isSiteLocale(locale)) headers.set("x-site-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/en", "/ja", "/ko", "/sv", "/fr", "/ru", "/es", "/zh"] };
