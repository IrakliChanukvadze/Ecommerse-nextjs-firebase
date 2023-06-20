import { Context } from "@/Context/context";
import { addProducts } from "@/libs/addProduct";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

function AdminAddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();
  const { prevId, setPrevId } = useContext(Context);
  const onSubmit = handleSubmit(async (data) => {
    addProducts({ ...data, id: prevId }).then(() => {
      setPrevId(prevId + 1);
      reset({
        title: "",
        description: "",
        price: 0,
        image: "",
        category: "",
      });
    });
  });
  return (
    <FormControl
      component={"form"}
      onSubmit={onSubmit}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <TextField
        color={errors.title ? "error" : "primary"}
        label="title"
        sx={{
          width: "60%",
          minWidth: "230px",
          margin: "auto",
        }}
        {...register("title", {
          required: "required",
        })}
      />

      <TextField
        color={errors.description ? "error" : "primary"}
        label="description"
        sx={{ width: "60%", minWidth: "230px", margin: "auto" }}
        {...register("description", {
          required: "required",
        })}
      />
      <TextField
        color={errors.price ? "error" : "primary"}
        label="price"
        sx={{ width: "60%", minWidth: "230px", margin: "auto" }}
        {...register("price", {
          required: "required",
          pattern: {
            value: /^\d*\.?\d*$/,
            message: "Value for price field does not match price format",
          },
        })}
      />
      <TextField
        color={errors.image ? "error" : "primary"}
        label="image link"
        sx={{ width: "60%", minWidth: "230px", margin: "auto" }}
        {...register("image", {
          required: "required",
          pattern: {
            value: /^https:\/\/fakestoreapi\.com\/img\//,
            message: "Please provide image link from fakestoreapi.com - images",
          },
        })}
      />
      <TextField
        color={errors.category ? "error" : "primary"}
        label="category"
        sx={{ width: "60%", minWidth: "230px", margin: "auto" }}
        {...register("category", {
          required: "required",
        })}
      />
      {errors.price && (
        <Typography
          variant="subtitle2"
          textAlign={"center"}
          sx={{ color: "red", marginTop: "5px" }}
        >
          {errors.price.message}
        </Typography>
      )}
      <Button
        variant="outlined"
        type="submit"
        sx={{ width: "200px", margin: "auto", marginTop: "20px" }}
      >
        Add Product
      </Button>
    </FormControl>
  );
}

export default AdminAddProduct;
