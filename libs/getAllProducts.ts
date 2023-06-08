// "use client";
// import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// const [products, setProducts] = useState<Products>([]);
const productsCollectionRef = collection(db, "products");
// useEffect(() => {

export const getProducts = async () => {
  const data: any = await getDocs(productsCollectionRef);

  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  return products;
};
