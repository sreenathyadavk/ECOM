import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_c2VsZWN0ZWQtZ2xvd3dvcm0tNzIuY2xlcmsuYWNjb3VudHMuZGV2JA",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || "sk_test_dummyclerksecretkey1234567890",
  }
};

export default nextConfig;
