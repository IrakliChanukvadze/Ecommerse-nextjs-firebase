"use client";
import { Context } from "@/Context/context";
import { useAddToCart } from "@/app/hooks/useAddToCart";
import { Button } from "@/components/muiComponents/Mui";
import React, { useContext } from "react";

type Props = {
  price: number;
  product: Product[];
};

function AddToCartButton(props: Props) {
  const { currentUser } = useContext(Context);
  const handleAddToCart = useAddToCart()!;

  function handleClick() {
    handleAddToCart({ ...props.product[0], price: props.price });
    console.log({ ...props.product[0], price: props.price });
  }

  return (
    <Button
      disabled={currentUser ? false : true}
      onClick={() => handleClick()}
      variant="contained"
    >
      Add to cart
    </Button>
  );
}

export default AddToCartButton;
