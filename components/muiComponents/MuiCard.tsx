"use client";
import Card, { CardProps } from "@mui/material/Card";

import React from "react";

function MuiCard(props: CardProps) {
  return <Card {...props}>{props.children}</Card>;
}

export default MuiCard;
