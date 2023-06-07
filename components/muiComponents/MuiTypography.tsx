"use client";
import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

function MuiTypography(props: TypographyProps) {
  return <Typography {...props}>{props.children}</Typography>;
}

export default MuiTypography;
