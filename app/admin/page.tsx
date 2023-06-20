"use client";
import { Context } from "@/Context/context";
import { Box, Typography } from "@/components/muiComponents/Mui";
import { Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import AdminRegister from "./components/AdminRegister";
import AdminAddProduct from "./components/AdminAddProduct";
import AdminMessages from "./components/AdminMessages";

const AdminPageContent = (value: number) => {
  switch (value) {
    case 0:
      return <AdminRegister />;
    case 1:
      return <AdminAddProduct />;
    case 2:
      return <AdminMessages />;
  }
};

function Admin() {
  const { currentUser } = useContext(Context);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      {currentUser?.isAdmin ? (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginBottom: "20px",
            }}
            display="flex"
            justifyContent="center"
            marginTop={"20px"}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Register Admin" />
              <Tab label="Add product" />
              <Tab label="Messages" />
            </Tabs>
          </Box>
          {AdminPageContent(value)}
        </Box>
      ) : (
        <Typography textAlign={"center"} marginTop={"30px"}>
          Sorry, you dont have permision to visit this page
        </Typography>
      )}
    </div>
  );
}

export default Admin;
