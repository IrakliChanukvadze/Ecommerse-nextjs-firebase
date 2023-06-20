import { Context } from "@/Context/context";
import { addUser } from "@/libs/addUser";
import { SignUp } from "@/libs/firebaseAuth";
import { getCurrentUser } from "@/libs/getCurrentUser";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface FormTypes {
  email: string;
  password: string;
}
function AdminRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormTypes>();
  const { setCurrentUser } = useContext(Context);
  const [authErr, setAuthErr] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (data) => {
    const d: any = await getCurrentUser(data.email);
    const signInFireBase = SignUp(data.email, data.password, setCurrentUser);
    signInFireBase
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(d[0]);
        addUser({
          email: data.email,
          isAdmin: true,
          messages: [],
        });

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
    <Box sx={{ marginTop: "30px" }}>
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
          variant="outlined"
          type="submit"
          sx={{ width: "200px", margin: "auto", marginTop: "20px" }}
        >
          Confirm
        </Button>
      </FormControl>
    </Box>
  );
}

export default AdminRegister;
