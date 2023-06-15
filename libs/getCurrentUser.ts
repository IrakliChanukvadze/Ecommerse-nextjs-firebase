import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

const usersCollectionRef = collection(db, "users");

export const getCurrentUser = async (email: string) => {
  const q = query(usersCollectionRef, where("email", "==", email));
  const data: any = await getDocs(q);
  const user: User = data.docs.map((item: any) => ({
    ...item.data(),
  }));
  return user;
};
