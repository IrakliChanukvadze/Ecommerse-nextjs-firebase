"use client";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import React from "react";

function MuiSkeleton(props: SkeletonProps) {
  return <Skeleton {...props} />;
}

export default MuiSkeleton;
