import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export const deletePost = async (id: string) =>
  new Promise(async (res, rej) => {
    const productCollectionRef = collection(db, "products");

    const postDocRef = doc(productCollectionRef, id);

    await deleteDoc(postDocRef);
    res(true);
  });
