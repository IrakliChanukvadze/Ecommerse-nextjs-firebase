"use client";
import React, { useContext, useEffect, useState } from "react";
import { useGetCartItems } from "../hooks/useGetCartItems";
import CartItem from "./CartItem";
import { Box, Button, Typography } from "@/components/muiComponents/Mui";
import { Context } from "@/Context/context";
import { useCheckout } from "../hooks/useCheckout";

function Cart() {
  const [balanceError, setBalanceError] = useState(false);
  const { currentUser } = useContext(Context);
  const cartItems = useGetCartItems();
  const [totalCost, setTotalCost] = useState<number>(0);
  const checkout = useCheckout(totalCost, setBalanceError);

  useEffect(() => {
    setTotalCost(
      cartItems?.reduce((prev, curr) => prev + curr.price * curr.amount, 0)
    );
  }, [cartItems]);

  if (!currentUser)
    return <strong>You don&apos;t have permission to visit this page!</strong>;

  function handleCheckout() {
    if (checkout) {
      checkout();
    }
  }
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

      <Box fontSize="30px" display="flex" justifyContent="space-evenly">
        <strong>Total : {totalCost}$</strong>
        {balanceError && (
          <Typography color="red">Not enough money! Add funds!</Typography>
        )}
        <Button
          onClick={handleCheckout}
          variant="contained"
          disabled={Boolean(!cartItems.length)}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
}

export default Cart;
