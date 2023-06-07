"use client";
import React from "react";
import Grid, { GridProps } from "@mui/material/Grid";

function MuiGrid(props: GridProps) {
  return <Grid {...props}>{props.children}</Grid>;
}

export default MuiGrid;
