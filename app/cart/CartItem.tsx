import { Box, Card } from "@/components/muiComponents/Mui";
import Image from "next/image";
import React from "react";

type CartItemProps = {
  title: string;
  price: number;
  amount: number;
  imgUrl: string;
};

function CartItem(props: CartItemProps) {
  return (
    <Card>
      <Box
        display="flex"
        gap="20px"
        padding="15px"
        justifyContent="space-between"
      >
        <Image src={props.imgUrl} alt="img" width={200} height={200} />
        <Box width="300px">
          <Box>{props.title}</Box>
          <hr />
          <Box>
            <strong>{props.price} $</strong>
          </Box>
        </Box>
        <Box alignSelf="center" justifySelf="flex-end">
          {props.amount}
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
