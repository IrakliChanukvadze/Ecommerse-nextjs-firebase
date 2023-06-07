"use client";
import React from "react";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
function MuiAvatar(props: AvatarProps) {
  return <Avatar {...props}>{props.children}</Avatar>;
}

export default MuiAvatar;
