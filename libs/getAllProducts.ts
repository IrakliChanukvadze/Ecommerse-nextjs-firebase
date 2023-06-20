import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const productsCollectionRef = collection(db, "products");

export const getProducts = async () => {
  const data: any = await getDocs(productsCollectionRef);
  const products: Products = data.docs.map((item: any) => ({
    ...item.data(),
    uid: item.id,
  }));
  return products;
};
