"use client";
import AppBar, { AppBarProps } from "@mui/material/AppBar";

import React from "react";

function MuiAppBar(props: AppBarProps) {
  return <AppBar {...props}>{props.children}</AppBar>;
}

export default MuiAppBar;
