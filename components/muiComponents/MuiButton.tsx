"use client";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

function MuiButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}

export default MuiButton;
