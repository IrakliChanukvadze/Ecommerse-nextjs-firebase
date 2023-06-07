"use client";
import React from "react";
import Alert, { AlertProps } from "@mui/material/Alert";
function MuiAlert(props: AlertProps) {
  return <Alert {...props}>{props.children}</Alert>;
}

export default MuiAlert;
