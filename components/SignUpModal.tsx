"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
} from "./muiComponents/Mui";
import { useForm } from "react-hook-form";
import { Context } from "@/Context/context";
import { SignUp } from "@/libs/firebaseAuth";
import { IconButton, InputAdornment } from "@mui/material";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

type Props = {
  open: boolean;
  onClose: () => void;
};

interface FormTypes {
  email: string;
  password: string;
}

function SignInModal({ open, onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTypes>();
  const { currentUser, setCurrentUser, toggler } = useContext(Context);
  const [authErr, setAuthErr] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const onSubmit = handleSubmit((data) => {
    const signInFireBase = SignUp(data.email, data.password, setCurrentUser);
    signInFireBase
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        onClose();
        reset({
          email: "",
          password: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthErr(error.code);
        // ..
      });
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        width={"500px"}
        height={"500px"}
        sx={{
          transform: "translate(-50%, -50%)",
          backgroundColor: toggler === "dark" ? "black" : "white",
        }}
      >
        <FormControl
          component={"form"}
          onSubmit={onSubmit}
          sx={{ width: "100%", paddingY: "20px" }}
        >
          <TextField
            color={errors.email ? "error" : "primary"}
            label="product code"
            sx={{
              width: "60%",
              minWidth: "230px",
              margin: "auto",
              marginBottom: "20px",
            }}
            {...register("email", {
              required: "required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <Box
            position={"relative"}
            sx={{
              width: "60%",
              minWidth: "230px",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <TextField
              color={errors.password ? "error" : "primary"}
              label="password"
              sx={{ width: "100%" }}
              type={showPass ? "text" : "password"}
              {...register("password", {
                required: "required",
              })}
            />
            {showPass ? (
              <AiFillEye
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translate(0, -50%)",
                }}
                size={25}
                onClick={() => {
                  setShowPass(false);
                }}
              />
            ) : (
              <AiFillEyeInvisible
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translate( 0, -50%)",
                }}
                size={25}
                onClick={() => {
                  setShowPass(true);
                }}
              />
            )}
          </Box>
          {authErr && <p>{authErr}</p>}
          <Button type="submit" sx={{ width: "200px", margin: "auto" }}>
            Sign Up
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default SignInModal;
