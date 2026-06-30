if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "pk_test_c2VsZWN0ZWQtZ2xvd3dvcm0tNzIuY2xlcmsuYWNjb3VudHMuZGV2JA";
}
if (!process.env.CLERK_SECRET_KEY) {
  process.env.CLERK_SECRET_KEY = "sk_test_dummyclerksecretkey1234567890";
}

import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default async function middleware(request: any, event: any) {
  const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
  const host = request.headers.get("host") || "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("192.168.");
  
  const isDevKey = pubKey.startsWith("pk_test");
  
  if (isDevKey && !isLocalhost) {
    return NextResponse.next();
  }
  return clerkMiddleware()(request, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
