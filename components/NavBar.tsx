import React from "react";
import TogglerNav from "./TogglerNav";
import { Box, Menu, Typography } from "./muiComponents/Mui";
import NavBarMenu from "./NavBarMenu";
import AuthContainer from "./AuthContainer";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
  return (
    <Box
      height={"80px"}
      paddingX={"20px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ backgroundColor: "#42a5f5" }}
    >
      <Link href="/">
        <Typography variant="h6">Gurromerce</Typography>
      </Link>
      <NavBarMenu />
      <Box display={"flex"} alignItems={"center"} gap="10px">
        <AuthContainer />
        <Link href="/cart">
          <AiOutlineShoppingCart fontSize="20px" />
        </Link>
        <TogglerNav />
      </Box>
    </Box>
  );
}

export default NavBar;
