import React from "react";
import { Button, Card } from "./muiComponents/Mui";
import { Grid } from "./muiComponents/Mui";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./muiComponents/Mui";
import { Box } from "./muiComponents/Mui";
import styles from "./SingleItem.module.css";

function SingleItem(props: Product) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      maxWidth="400px"
      minWidth="300px"
    >
      <Card
        sx={{ paddingX: "15px", paddingY: "10px" }}
        className={styles.cardContainer}
      >
        <Box className={styles.imageContainer}>
          <Image src={props.image} alt={props.title} fill={true} />
        </Box>
        <Box
          sx={{ flex: 1 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="subtitle2"
            textAlign={"left"}
            paddingTop={"20px"}
            sx={{ textDecoration: "none" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ opacity: "80%" }}
            padding={"10px"}
            textAlign={"center"}
          >
            $ {props.price}
          </Typography>
        </Box>

        <Link
          href={`/products/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button variant="outlined">Go to details</Button>
        </Link>
      </Card>
    </Grid>
  );
}

export default SingleItem;
