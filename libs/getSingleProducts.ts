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

export const getSingleProduct = async (id: number) => {
  const data: any = await getDocs(productsCollectionRef);

  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  return products.filter((item) => item.id == id);
};
