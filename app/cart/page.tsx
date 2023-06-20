"use client";
import React, { useContext } from "react";
import { useGetCartItems } from "../hooks/useGetCartItems";
import CartItem from "./CartItem";
import { Box } from "@/components/muiComponents/Mui";
import { Context } from "@/Context/context";

function Cart() {
  const { currentUser } = useContext(Context);
  const cartItems = useGetCartItems();

  if (!currentUser)
    return <strong>You don&apos;t have permission to visit this page!</strong>;

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
          key={item.id + item.price}
          title={item.title}
          price={item.price}
          amount={item.amount}
          imgUrl={item.image}
          product={item}
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
