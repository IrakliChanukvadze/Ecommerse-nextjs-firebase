"use client";
import React, { useContext, useState } from "react";
import { Avatar, Box, Button, Typography } from "./muiComponents/Mui";
import SignInModal from "./modals/SignInModal";
import { Context } from "@/Context/context";
import SignUpModal from "./modals/SignUpModal";
import { useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";

function AuthContainer() {
  const { currentUser } = useContext(Context);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  return (
    <Box display={"flex"}>
      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />

      {currentUser?.email ? (
        <ProfileMenu />
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
