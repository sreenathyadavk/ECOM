import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishListPage = async () => {
  let user = null;
  try {
    const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    if (pubKey && pubKey !== "pk_test_c2VsZWN0ZWQtZ2xvd3dvcm0tNzIuY2xlcmsuYWNjb3VudHMuZGV2JA") {
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
