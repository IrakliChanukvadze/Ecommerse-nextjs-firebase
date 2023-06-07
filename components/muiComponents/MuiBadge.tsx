"use client";
import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";

function MuiBadge(props: BadgeProps) {
  return <Badge {...props}>{props.children}</Badge>;
}

export default MuiBadge;
