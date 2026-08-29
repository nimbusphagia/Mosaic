import { NextRequest, NextResponse } from "next/server";

async function refreshTokens(refreshToken: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: "POST",
    headers: { cookie: `refreshToken=${refreshToken}` },
  });
  return res;
}

const publicPaths = ["/login", "/register"];

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublic = publicPaths.some((p) => pathname.startsWith(p));

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && refreshToken && !isPublic) {
    const refreshRes = await refreshTokens(refreshToken);

    if (refreshRes.ok) {
      const response = NextResponse.next();
      for (const cookie of refreshRes.headers.getSetCookie?.() ?? []) {
        response.headers.append("set-cookie", cookie);
      }
      return response;
    }
    accessToken = undefined;
  }

  if (!accessToken && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|register|_next/static|_next/image|favicon.ico|api).*)"],
};
