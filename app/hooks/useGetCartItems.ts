"use client";
import { Context } from "@/Context/context";
import { useContext, useEffect, useState } from "react";
import { getCartItems } from "@/libs/getCartItems";

export function useGetCartItems() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { currentUser } = useContext(Context);
  useEffect(() => {
    getCartItems(currentUser?.email!).then((data) => {
      setCartItems(data);
    });
  }, [currentUser?.email]);

  return cartItems;
}
