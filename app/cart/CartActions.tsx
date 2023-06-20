"use client";
import { Box, Button } from "@/components/muiComponents/Mui";
import React, { useContext } from "react";
import { useAddToCart } from "../hooks/useAddToCart";
import { useRemoveFromCart } from "../hooks/useRemoveFromCart";
import { Context } from "@/Context/context";

type CartActionsProps = {
  amount: number;
  product: Product;
};

type CartAction = "add" | "delete";

function CartActions(props: CartActionsProps) {
  const addToCart = useAddToCart()!;
  const removeFromCart = useRemoveFromCart()!;

  async function handleCartAction(action: CartAction) {
    if (action === "add") {
      await addToCart(props.product);
    } else {
      await removeFromCart(props.product);
    }
  }

  return (
    <>
      <Box
        alignSelf="center"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="40px"
      >
        <Button variant="outlined" onClick={() => handleCartAction("add")}>
          Add
        </Button>
        <strong>{props.amount}</strong>
        <Button variant="outlined" onClick={() => handleCartAction("delete")}>
          Del
        </Button>
      </Box>
    </>
  );
}

export default CartActions;
