"use client";
import React, { useContext } from "react";
import { Box, Switch, Typography } from "./muiComponents/Mui";
import { Context } from "@/Context/context";

function TogglerNav() {
  const { changeToggle } = useContext(Context);
  return (
    <Box display={"flex"} alignItems={"center"} marginRight={"30px"} gap={1}>
      {" "}
      <Typography variant="subtitle2">Dark</Typography>{" "}
      <Switch onClick={changeToggle} />{" "}
      <Typography variant="subtitle2">Light</Typography>
    </Box>
  );
}

export default TogglerNav;
