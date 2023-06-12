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
import { SignIn } from "@/libs/firebaseAuth";

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
    const signInFireBase = SignIn(data.email, data.password, setCurrentUser);
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
          sx={{ width: "100%" }}
        >
          <TextField
            color={errors.email ? "error" : "primary"}
            label="product code"
            sx={{
              width: "60%",
              minWidth: "230px",
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

          <TextField
            color={errors.password ? "error" : "primary"}
            label="password"
            type={showPass ? "text" : "password"}
            sx={{ width: "60%", minWidth: "230px", margin: "auto" }}
            {...register("password", {
              required: "required",
            })}
          />
          <p
            onClick={() => {
              setShowPass((prev) => !prev);
            }}
          >
            {!showPass ? "show" : "hide"} password
          </p>
          {authErr && <p>{authErr}</p>}
          <Button type="submit" sx={{ width: "200px", margin: "auto" }}>
            submit
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default SignInModal;
