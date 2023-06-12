"use client";
import { User } from "firebase/auth";
import React, { useState } from "react";

type Context = {
  toggler: Theme;
  changeToggle: () => void;
  currentUser: User | null;
  setCurrentUser: ({}: User) => void;
};

const Context = React.createContext<Context>({
  toggler: "dark",
  changeToggle: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});
type Theme = "dark" | "light";

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [toggler, setToggler] = useState<Theme>("dark");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const changeToggle = () => {
    console.log(toggler);
    setToggler((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <Context.Provider
      value={{ toggler, changeToggle, currentUser, setCurrentUser }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
