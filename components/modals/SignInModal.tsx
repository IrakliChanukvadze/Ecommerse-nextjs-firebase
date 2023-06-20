"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "../muiComponents/Mui";
import { useForm } from "react-hook-form";
import { Context } from "@/Context/context";
import { SignIn } from "@/libs/firebaseAuth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getCurrentUser } from "@/libs/getCurrentUser";

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
  const onSubmit = handleSubmit(async (data) => {
    const d: any = await getCurrentUser(data.email);
    const signInFireBase = SignIn(data.email, data.password, setCurrentUser);
    signInFireBase
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("gurromerceUser", JSON.stringify(d[0]));
        setCurrentUser(d[0]);
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
        height={"380px"}
        sx={{
          transform: "translate(-50%, -50%)",
          backgroundColor: toggler === "dark" ? "black" : "white",
        }}
      >
        <Typography variant="h6" textAlign={"center"} marginY={"20px"}>
          Sign In
        </Typography>
        <FormControl
          component={"form"}
          onSubmit={onSubmit}
          sx={{ width: "100%" }}
        >
          <TextField
            color={errors.email ? "error" : "primary"}
            label="email"
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
            }}
          >
            <TextField
              color={errors.password ? "error" : "primary"}
              label="password"
              type={showPass ? "text" : "password"}
              sx={{ width: "100%" }}
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
          {authErr && (
            <Typography
              variant="subtitle2"
              textAlign={"center"}
              sx={{ color: "red", marginTop: "5px" }}
            >
              {authErr}
            </Typography>
          )}
          <Button
            type="submit"
            variant="outlined"
            sx={{ width: "200px", margin: "auto", marginTop: "20px" }}
          >
            submit
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
}

export default SignInModal;
