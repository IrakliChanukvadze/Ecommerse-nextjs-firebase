import React from "react";
import { Metadata } from "next";
import { getSingleProduct } from "@/libs/getSingleProducts";

import Image from "next/image";
import { Typography, Card, Grid, Box } from "@/components/muiComponents/Mui";
import PromoCodeInput from "./PromoCodeInput";
import { getPromoCodes } from "@/libs/getPromoCodes";
import AddToCartButton from "./AddToCartButton";
import BuyCard from "./BuyCard";

type Params = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const data = await getSingleProduct(id);

  return {
    title: data[0]?.title,
  };
}

async function ProductPage({ params: { id } }: Params) {
  const data = await getSingleProduct(id);

  const promoCodes = await getPromoCodes();

  return (
    <Box display="flex" justifyContent="center">
      {data.map((item) => (
        <Grid
          container
          key={item.id}
          display="grid"
          gridTemplateRows="1fr 1.5fr"
          width="80%"
        >
          <Grid item display="flex" alignItems="center">
            <Typography variant="h4">{item.title}</Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={8} md={8}>
                <Box display="flex" justifyContent="space-between">
                  <Image
                    src={item.image}
                    alt="product"
                    width={300}
                    height={300}
                    style={{
                      borderRadius: "20px",
                    }}
                  />
                  <Typography width="60%">{item.description}</Typography>
                </Box>
              </Grid>

              <Grid
                item
                xs={8}
                md={4}
                sx={{ margin: "auto" }}
                display={"flex"}
                justifyContent={"center"}
              >
                <BuyCard
                  data={data}
                  price={item.price}
                  promoCodes={promoCodes}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default ProductPage;
