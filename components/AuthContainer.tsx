"use client";
import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "./muiComponents/Mui";
import SignInModal from "./SignInModal";
import { Context } from "@/Context/context";
import SignUpModal from "./SignUpModal";

function AuthContainer() {
  const { currentUser } = useContext(Context);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  return (
    <Box display={"flex"}>
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
      {currentUser?.email ? (
        <Typography variant="subtitle2">{currentUser?.email}</Typography>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSignUpOpen(true)}
          >
            <Typography variant="subtitle2">Sign Up</Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginX: "20px" }}
            onClick={() => setSignInOpen(true)}
          >
            <Typography variant="subtitle2">Sign In</Typography>
          </Button>
        </>
      )}
    </Box>
  );
}

export default AuthContainer;
