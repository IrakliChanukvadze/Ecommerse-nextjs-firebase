"use client";
import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { getProducts } from "@/libs/getAllProducts";
import Link from "next/link";
import { Context } from "@/Context/context";

export default function BasicMenu() {
  //   const myPromise = new Promise(async (resolve, reject) => {

  //     resolve(categories);
  //   });
  const { toggler } = useContext(Context);
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    const getCategories = async () => {
      const tempCategories = [
        "all",
        ...new Set([...(await getProducts()).map((item) => item.category)]),
      ];

      setCategories(tempCategories);
    };
    getCategories();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        id="basic-button"
        variant="h6"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      >
        Categories
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories?.map((item) => (
          <Link
            href={item === "all" ? "/" : `/categories/${item}`}
            style={{ textDecoration: "none" }}
          >
            <MenuItem key={item} onClick={handleClose}>
              <Typography
                padding={"4px"}
                variant="subtitle2"
                color="primary"
                sx={{
                  cursor: "pointer",
                  color: toggler === "dark" ? "white" : "black",
                }}
              >
                {item}
              </Typography>
            </MenuItem>{" "}
          </Link>
        ))}
      </Menu>
    </div>
  );
}
