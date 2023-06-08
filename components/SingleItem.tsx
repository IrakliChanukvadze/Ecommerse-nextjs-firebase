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
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card sx={{ padding: "10px" }} className={styles.cardContainer}>
        <Box>
          <Box className={styles.imageContainer}>
            <Image src={props.image} alt={props.title} fill={true} />
          </Box>

          <Typography
            variant="subtitle2"
            textAlign={"left"}
            paddingTop={"20px"}
            sx={{ textDecoration: "none" }}
            color="common"
            // className={styles.linkText}
          >
            {props.title}
          </Typography>
        </Box>
        {/* <Box
          position="absolute"
          bottom="10px"
          left="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        > */}
        <Link
          href={`/products/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button variant="outlined">Go to details</Button>
        </Link>
        {/* </Box> */}
      </Card>
    </Grid>
  );
}

export default SingleItem;
