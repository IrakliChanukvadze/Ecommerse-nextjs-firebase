"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Rating, TextField } from "./muiComponents/Mui";
import { Grid } from "./muiComponents/Mui";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./muiComponents/Mui";
import { Box } from "./muiComponents/Mui";
import { Context } from "@/Context/context";
import { deletePost } from "@/libs/deletePost";
import { editPost } from "@/libs/editPost";

type TextField = {
  title: string;
  price: number;
  id: number;
};

function SingleItem(props: Product) {
  const { currentUser, setPrevId } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [textFieldState, setTextFieldState] = useState({
    title: "",
    price: 0,
  });
  useEffect(() => {
    setTextFieldState({ title: props.title, price: props.price });
    if (props.id !== -1) {
      setPrevId(props.id + 1);
    }
  }, []);
  const changeState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!/^\d*\.?\d*$/.test(value)) return;
    setTextFieldState((prev) => ({ ...prev, [name]: value }));
  };

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
        sx={{
          paddingX: "15px",
          paddingY: "10px",
          height: currentUser?.isAdmin ? "600px" : "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src={props.image}
          alt={textFieldState.title}
          width={250}
          height={250}
        />
        <Rating readOnly value={props.rating.rate} sx={{ marginTop: "10px" }} />

        <Box
          sx={{ flex: 1 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          {edit ? (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              marginTop={"20px"}
              gap={"20px"}
            >
              <TextField
                sx={{ height: "50px" }}
                value={textFieldState.title}
                name="title"
                onChange={(e) => changeState(e)}
              />
              <TextField
                sx={{ height: "50px" }}
                value={textFieldState.price}
                name="price"
                onChange={(e) => changeState(e)}
              />
            </Box>
          ) : (
            <>
              {" "}
              <Typography
                variant="subtitle2"
                textAlign={"left"}
                paddingTop={"20px"}
                sx={{ textDecoration: "none" }}
              >
                {textFieldState.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ opacity: "80%" }}
                padding={"10px"}
                textAlign={"center"}
              >
                $ {textFieldState.price}
              </Typography>
            </>
          )}
        </Box>

        <Link
          href={`/products/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button variant="outlined" sx={{ width: "250px" }}>
            Go to details
          </Button>
        </Link>
        {currentUser?.isAdmin &&
          (edit ? (
            <Button
              variant="outlined"
              sx={{ width: "250px", marginY: "20px" }}
              onClick={() => {
                if (
                  textFieldState.price !== props.price ||
                  textFieldState.title !== props.title
                ) {
                  editPost({
                    title: textFieldState.title,
                    id: props.uid,
                    price: textFieldState.price,
                  });
                }
                setEdit(false);
              }}
            >
              Finish editing
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                sx={{ width: "250px", marginY: "20px" }}
                onClick={() => setEdit(true)}
              >
                Edit Products
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ width: "250px" }}
                onClick={() => {
                  deletePost(props.uid);
                }}
              >
                Delete Product
              </Button>
            </>
          ))}
      </Card>
    </Grid>
  );
}

export default SingleItem;
