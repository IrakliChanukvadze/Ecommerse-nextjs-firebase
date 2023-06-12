import React from "react";
import TogglerNav from "./TogglerNav";
import { Box, Menu, Typography } from "./muiComponents/Mui";
import NavBarMenu from "./NavBarMenu";
import AuthContainer from "./AuthContainer";

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
      <Typography variant="h6">Gurromerce</Typography>
      <NavBarMenu />
      <Box display={"flex"} alignItems={"center"}>
        <AuthContainer />
        <TogglerNav />
      </Box>
    </Box>
  );
}

export default NavBar;
