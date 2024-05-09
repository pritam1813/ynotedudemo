import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

let URL = "";

const env = process.env.NODE_ENV;

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  env == "development"
    ? (URL = `http://${process.env.BASE_URL}`)
    : (URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`);

  if (!auth().userId && isProtectedRoute(req)) {
    return NextResponse.redirect(`${URL}/login`);
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
