"use client";
import React, { useState } from "react";

const Context = React.createContext({
  toggler: "dark",
  changeToggle: () => {},
});
type Theme = "dark" | "light";

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [toggler, setToggler] = useState<Theme>("dark");

  const changeToggle = () => {
    console.log(toggler);
    setToggler((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Context.Provider value={{ toggler, changeToggle }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
