"use client";
import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Typography } from "@mui/material";
import { Context } from "@/Context/context";
import { useRouter } from "next/navigation";
import WithdrawModal from "./modals/WithdrawModal";
import DepositModal from "./modals/DepositModal";

export default function BasicMenu() {
  const router = useRouter();
  const { toggler, currentUser, setCurrentUser } = useContext(Context);
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <WithdrawModal
        open={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
      />
      <DepositModal open={depositOpen} onClose={() => setDepositOpen(false)} />
      <Avatar
        //   alt="Remy Sharp"
        sx={{ cursor: "pointer" }}
        onClick={(e) => handleClick(e)}
        id="basic-button"
        // variant="h6"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Typography variant="subtitle2">
            Welcome {currentUser?.email}
          </Typography>
        </MenuItem>
        {currentUser?.isAdmin ? (
          <MenuItem
            onClick={() => {
              handleClose();
              router.push("/admin");
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                cursor: "pointer",
              }}
            >
              Admin Page
            </Typography>
          </MenuItem>
        ) : (
          <>
            <MenuItem
              onClick={() => {
                handleClose();
              }}
            >
              <Typography variant="subtitle2">
                Balance ${currentUser?.balance}
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                setDepositOpen(true);
              }}
            >
              <Typography variant="subtitle2">Deposit</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();

                setWithdrawOpen(true);
              }}
            >
              <Typography variant="subtitle2">Withdrow</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                router.push("/cart");
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="subtitle2"
              >
                Cart
              </Typography>
            </MenuItem>
          </>
        )}

        <MenuItem
          onClick={() => {
            handleClose();
            setCurrentUser(null);
            localStorage.removeItem("gurromerceUser");
          }}
        >
          <Typography
            sx={{
              cursor: "pointer",
            }}
            variant="subtitle2"
          >
            Log Out
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
