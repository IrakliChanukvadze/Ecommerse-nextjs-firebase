"use client";
import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

function MuiTextField(props: TextFieldProps) {
  return <TextField {...props}>{props.children}</TextField>;
}

export default MuiTextField;
