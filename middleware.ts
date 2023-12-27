import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - icons
     * - images
     * - favicon.ico (favicon file)
     */
    "/((?!api|favicon.ico|filesInPublic).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  console.log("Middleware -", req.url);

  if (req.nextUrl.pathname.startsWith("/test") && req.nextUrl.locale !== "en") {
    console.log(
      "Middleware redirect -",
      new URL(`/en${req.nextUrl.pathname}`, req.url).href
    );
    return NextResponse.redirect(
      new URL(`/en${req.nextUrl.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
