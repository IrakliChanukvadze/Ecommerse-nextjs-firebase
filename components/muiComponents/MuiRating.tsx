"use client";
import React from "react";
import Rating, { RatingProps } from "@mui/material/Rating";

function MuiRating(props: RatingProps) {
  return <Rating {...props} />;
}

export default MuiRating;
