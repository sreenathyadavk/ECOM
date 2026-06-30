import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart online store",
    default: "Shopcart online store",
  },
  description: "Shopcart online store, Your one stop shop for all your needs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const host = headerList.get("host") || "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("192.168.");
  const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
  const isDevKey = pubKey.startsWith("pk_test");
  const shouldRunClerk = pubKey && !(isDevKey && !isLocalhost);

  if (shouldRunClerk) {
    return (
      <ClerkProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </ClerkProvider>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
