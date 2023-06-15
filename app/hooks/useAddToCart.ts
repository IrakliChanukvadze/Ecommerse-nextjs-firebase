import { Context } from "@/Context/context";
import { addToCart } from "@/libs/addToCart";
import { useContext, useEffect } from "react";

export function useAddToCart() {
  const { currentUser } = useContext(Context);

  //   if (currentUser) {
  return (newItem: Product) => addToCart(currentUser?.email!, newItem);
  //   }
}
