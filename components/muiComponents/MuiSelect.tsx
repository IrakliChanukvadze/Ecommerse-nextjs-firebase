"use client";
import React from "react";
import Select, { SelectProps } from "@mui/material/Select";

function MuiSelect(props: SelectProps) {
  return <Select {...props}>{props.children}</Select>;
}

export default MuiSelect;
