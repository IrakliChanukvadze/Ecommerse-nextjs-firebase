import { Box, Button, Card } from "@/components/muiComponents/Mui";
import Image from "next/image";
import React from "react";
import CartActions from "./CartActions";

type CartItemProps = {
  title: string;
  price: number;
  amount: number;
  imgUrl: string;
  product: Product;
};

function CartItem(props: CartItemProps) {
  return (
    <Card>
      <Box
        display="flex"
        gap="20px"
        padding="15px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={props.imgUrl} alt="img" width={200} height={200} />
        <Box width="300px">
          <Box>{props.title}</Box>
          <hr />
          <Box>
            <strong>{props.price} $</strong>
          </Box>
        </Box>
        <CartActions amount={props.amount} product={props.product} />
      </Box>
    </Card>
  );
}

export default CartItem;
