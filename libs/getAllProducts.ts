// "use client";
// import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

type Products = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}[];

// const [products, setProducts] = useState<Products>([]);
const productsCollectionRef = collection(db, "products");
// useEffect(() => {

export const getProducts = async () => {
  const data: any = await getDocs(productsCollectionRef);
  // console.log(data);

  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  return products;
};
