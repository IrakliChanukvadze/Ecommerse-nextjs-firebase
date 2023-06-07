"use client";
import React from "react";
import Backdrop, { BackdropProps } from "@mui/material/Backdrop";

function MuiBackdrop(props: BackdropProps) {
  return <Backdrop {...props}>{props.children}</Backdrop>;
}

export default MuiBackdrop;
