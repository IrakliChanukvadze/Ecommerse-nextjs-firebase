"use client";
import React from "react";
import ToolTip, { TooltipProps } from "@mui/material/Tooltip";

function MuiTooltip(props: TooltipProps) {
  return <ToolTip {...props}>{props.children}</ToolTip>;
}

export default MuiTooltip;
