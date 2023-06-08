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
} from "@/components/muiComponents/Mui";

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

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {data.map((item) => (
        <Grid
          container
          key={item.id}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          direction="column"
          width="100%"
          height="100%"
          spacing={5}
        >
          <Grid item alignSelf="flex-start">
            <Typography variant="h4" marginLeft="200px">
              {item.title}
            </Typography>
          </Grid>
          <Grid item alignSelf="flex-start">
            <Image
              src={item.image}
              alt="product"
              width={250}
              height={250}
              style={{
                marginLeft: "200px",
                boxShadow: "5px 5px 10px rgba(0,0,0, 0.5)",
                padding: "10px",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item>
            <Card sx={{ width: "300px", height: "300px", padding: "20px" }}>
              <Typography variant="h5">
                Price: <strong>{item.price}$</strong>
              </Typography>
              <Button
                disabled={false}
                variant="contained"
                sx={{
                  display: "block",
                  marginInline: "auto",
                  marginTop: "230px",
                  backgroundColor: "#82b541",
                  width: "250px",
                }}
              >
                Add to cart
                <AppBar>Appbar</AppBar>
              </Button>
            </Card>
          </Grid>
        </Grid>
      ))}
      {/* <Link href="/">link to home</Link> */}
    </Grid>
  );
}

export default ProductPage;
