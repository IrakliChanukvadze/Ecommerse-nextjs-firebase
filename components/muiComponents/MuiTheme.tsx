"use client";
import { Context } from "@/Context/context";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Halant, Roboto } from "next/font/google";
import React, { ReactNode, useContext, useState } from "react";

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#00fff0",
      main: "#01579b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#00fff0",
      main: "#22aa22",
      contrastText: "#fff",
    },

    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    subtitle2: {
      fontWeight: "bold",
    },
    button: {
      fontWeight: "bold",
      letterSpacing: "0.15em",
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },
});

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#42a5f5",
    },
    secondary: {
      main: "#0f0",
    },
    background: {
      default: "#222",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    subtitle2: {
      fontWeight: "bold",
    },
    button: {
      fontWeight: "bold",
      letterSpacing: "0.15em",
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },
});

function MuiThemeProvider({ children }: { children: ReactNode }) {
  const { toggler } = useContext(Context);
  return (
    <ThemeProvider theme={toggler === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MuiThemeProvider;
