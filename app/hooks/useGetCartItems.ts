"use client";
import { Context } from "@/Context/context";
import { useContext, useEffect, useState } from "react";
import { getCartItems } from "@/libs/getCartItems";

export function useGetCartItems() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { currentUser } = useContext(Context);

  useEffect(() => {
    if (currentUser) {
      getCartItems(currentUser?.email!).then((data) => {
        setCartItems(data);
      });
    }
  }, [currentUser?.email, currentUser]);

  return cartItems;
}
