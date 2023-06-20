import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const productsCollectionRef = collection(db, "products");

export const getCategory = async (category: string) => {
  const q = query(productsCollectionRef, where("category", "==", category));
  const data: any = await getDocs(q);
  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
    uid: item.id,
  }));
  return products;
};
