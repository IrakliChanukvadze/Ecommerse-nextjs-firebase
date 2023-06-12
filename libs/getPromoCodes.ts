import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const promoCodesCollectionRef = collection(db, "promoCodes");

export const getPromoCodes: GetPromoCodes = async () => {
  const data: any = await getDocs(promoCodesCollectionRef);

  const promoCodes: PromoCodes = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  // console.log(promoCodes);
  return promoCodes;
};
