"use client";
import { useAddToCart } from "@/app/hooks/useAddToCart";
import { Button } from "@/components/muiComponents/Mui";
import React from "react";

type Props = {
  product: Product[];
};

function AddToCartButton(props: Props) {
  const handleAddToCart = useAddToCart();

  function handleClick() {
    handleAddToCart(props.product[0]);
    console.log(props.product[0]);
  }

  return (
    <Button onClick={() => handleClick()} variant="contained">
      Add to cart
    </Button>
  );
}

export default AddToCartButton;
