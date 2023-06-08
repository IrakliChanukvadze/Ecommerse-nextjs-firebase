import React from "react";
import { Metadata } from "next";
import { getSingleProduct } from "@/libs/getSingleProducts";
import Image from "next/image";
import {
  AppBar,
  Typography,
  Card,
  Grid,
  Button,
  TextField,
  Box,
} from "@/components/muiComponents/Mui";
import PromoCodeInput from "./PromoCodeInput";

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

  function handlePromoCode() {}

  return (
    <Grid
      container
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
      // height="100vh"
    >
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
          <Grid container display="flex" justifyContent="space-around">
            <Image
              src={item.image}
              alt="product"
              width={300}
              height={300}
              style={{
                // boxShadow: "5px 5px 10px rgba(0,0,0, 0.5)",
                padding: "10px",
                borderRadius: "20px",
              }}
            />
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
              <PromoCodeInput />
              <Button variant="contained">Add to cart</Button>
            </Card>
          </Grid>
          {/* <Grid item>
           
          </Grid> */}
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductPage;
