"use client";
import React, { useContext } from "react";
import { Switch } from "./muiComponents/Mui";
import { Context } from "@/Context/context";

function TogglerNav() {
  const { changeToggle } = useContext(Context);
  return <Switch onClick={changeToggle} />;
}

export default TogglerNav;
