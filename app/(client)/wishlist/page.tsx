import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { headers } from "next/headers";

const WishListPage = async () => {
  let user = null;
  try {
    const headerList = await headers();
    const host = headerList.get("host") || "";
    const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1") || host.includes("192.168.");
    const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";
    const isDevKey = pubKey.startsWith("pk_test");
    
    const shouldRunClerk = pubKey && !(isDevKey && !isLocalhost);

    if (shouldRunClerk) {
      user = await currentUser();
    }
  } catch (error) {
    console.error("Clerk auth failed in WishList:", error);
  }
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess details="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
      )}
    </>
  );
};

export default WishListPage;
