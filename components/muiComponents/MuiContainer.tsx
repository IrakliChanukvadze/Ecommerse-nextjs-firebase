"use client";
import Container, { ContainerProps } from "@mui/material/Container";
import React from "react";

function MuiContainer(props: ContainerProps) {
  return <Container {...props}>{props.children}</Container>;
}

export default MuiContainer;
