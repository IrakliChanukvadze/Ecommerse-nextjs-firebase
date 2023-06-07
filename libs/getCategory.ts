import { collection, getDocs, query, where } from "firebase/firestore";
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

const productsCollectionRef = collection(db, "products");

export const getCategory = async (category: string) => {
  const q = query(productsCollectionRef, where("category", "==", category));
  const data: any = await getDocs(q);
  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  return products;
};
