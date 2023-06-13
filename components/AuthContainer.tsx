"use client";
import React, { useContext, useState } from "react";
import { Box, Button, Typography } from "./muiComponents/Mui";
import SignInModal from "./SignInModal";
import { Context } from "@/Context/context";
import SignUpModal from "./SignUpModal";
import { redirect, useRouter } from "next/navigation";

function AuthContainer() {
  const router = useRouter();
  const { currentUser } = useContext(Context);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  console.log(currentUser);
  return (
    <Box display={"flex"}>
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
      {currentUser?.email ? (
        <>
          <Typography variant="subtitle2">{currentUser?.email}</Typography>
          {currentUser?.isAdmin && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/admin")}
            >
              <Typography variant="subtitle2">Admin</Typography>
            </Button>
          )}
        </>
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
