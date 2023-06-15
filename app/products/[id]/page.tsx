import React from "react";
import { Metadata } from "next";
import { getSingleProduct } from "@/libs/getSingleProducts";

import Image from "next/image";
import { Typography, Card, Grid, Button } from "@/components/muiComponents/Mui";
import PromoCodeInput from "./PromoCodeInput";
import { getPromoCodes } from "@/libs/getPromoCodes";
import AddToCartButton from "./AddToCartButton";

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
    title: data[0].title,
  };
}

async function ProductPage({ params: { id } }: Params) {
  const data = await getSingleProduct(id);

  const promoCodes = await getPromoCodes();

  return (
    <Grid container>
      {data.map((item) => (
        <Grid
          container
          key={item.id}
          display="grid"
          gridTemplateRows="1fr 1fr"
          spacing={5}
        >
          <Grid item>
            <Typography variant="h4" padding="100px 220px">
              {item.title}
            </Typography>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={8}
              md={6}
              sx={{ margin: "auto" }}
              display={"flex"}
              justifyContent={"center"}
              spacing={40}
            >
              <Image
                src={item.image}
                alt="product"
                width={300}
                height={300}
                style={{
                  padding: "10px",
                  borderRadius: "20px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={8}
              md={6}
              sx={{ margin: "auto" }}
              display={"flex"}
              justifyContent={"center"}
            >
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
                  <strong>$ {item.price}</strong>
                  <hr />
                </Typography>
                <PromoCodeInput price={item.price} promoCodes={promoCodes} />
                <AddToCartButton product={data} />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductPage;
