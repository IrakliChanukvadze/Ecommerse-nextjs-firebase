"use client";
import { db } from "@/libs/firebase";
import { getProducts } from "@/libs/getAllProducts";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";

type Context = {
  toggler: Theme;
  changeToggle: () => void;
  currentUser: User | null;
  setCurrentUser: ({}: User | null) => void;
  setPrevId: (prevIs: number) => void;
  prevId: number;
  data: Products;
};

const Context = React.createContext<Context>({
  toggler: "dark",
  changeToggle: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  setPrevId: () => {},
  prevId: 0,
  data: [],
});

type Theme = "dark" | "light";

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [toggler, setToggler] = useState<Theme>("dark");

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [prevId, setPrevId] = useState<number>(0);
  const [data, setData] = useState<Products>([]);
  const changeToggle = () => {
    setToggler((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("gurromerceUser")) {
        setCurrentUser(
          JSON.parse(localStorage.getItem("gurromerceUser") as string)
        );
      }
    }
    // seting data first time
    const fetchData = async () => {
      const d = await getProducts();
      setData(d);
    };
    fetchData();

    // snapshoting to get live updates on data
    onSnapshot(collection(db, "products"), (doc) => {
      setData(
        doc.docs.map((item: any) => ({
          ...item.data(),
          uid: item.id,
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (typeof window !== "undefined") {
        localStorage.setItem("gurromerceUser", JSON.stringify(currentUser));
      }
    }
  }, [currentUser]);
  return (
    <Context.Provider
      value={{
        toggler,
        changeToggle,
        currentUser,
        setCurrentUser,
        setPrevId,
        prevId,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
