import { Context } from "@/Context/context";
import { addToCart } from "@/libs/addToCart";
import { db } from "@/libs/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";

export function useAddToCart() {
  const { currentUser, setCurrentUser } = useContext(Context);

  if (!currentUser) {
    return null;
  }

  return (newItem: Product) =>
    addToCart(currentUser?.uid!, currentUser?.cart!, newItem).then(() => {
      onSnapshot(doc(db, "users", currentUser?.uid!), (doc) => {
        setCurrentUser(doc.data() as User);
      });
    });
}
