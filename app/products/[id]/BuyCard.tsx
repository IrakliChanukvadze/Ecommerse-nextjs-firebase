"use client";
import { Card, Typography } from "@/components/muiComponents/Mui";
import React, { useState } from "react";
import PromoCodeInput from "./PromoCodeInput";
import AddToCartButton from "./AddToCartButton";

type BuyCardProps = {
  price: number;
  promoCodes: PromoCodes;
  data: Product[];
};

function BuyCard(props: BuyCardProps) {
  const [price, setPrice] = useState(props.price);

  return (
    <>
      <Card
        sx={{
          width: "300px",
          height: "300px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">
          <strong>$ {price}</strong>
          <hr />
        </Typography>
        <PromoCodeInput
          price={price}
          setPrice={setPrice}
          promoCodes={props.promoCodes}
        />
        <AddToCartButton price={price} product={props.data} />
      </Card>
    </>
  );
}

export default BuyCard;
