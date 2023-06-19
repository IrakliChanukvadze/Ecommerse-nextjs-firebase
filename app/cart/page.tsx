"use client";
import React from "react";
import { useGetCartItems } from "../hooks/useGetCartItems";
import CartItem from "./CartItem";
import { Box } from "@/components/muiComponents/Mui";

function Cart() {
  const cartItems = useGetCartItems();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      gap="50px"
      marginY="50px"
    >
      {cartItems?.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          imgUrl={item.image}
        />
      ))}

      <Box fontSize="30px">
        Total :{" "}
        <strong>
          {cartItems?.reduce(
            (prev, curr) => prev + curr.price * curr.amount,
            0
          )}
          $
        </strong>
      </Box>
    </Box>
  );
}

export default Cart;
