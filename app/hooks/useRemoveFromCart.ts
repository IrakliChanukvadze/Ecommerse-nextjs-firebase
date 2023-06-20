import { Context } from "@/Context/context";
import { db } from "@/libs/firebase";
import { removeFromCart } from "@/libs/removeFromCart";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";

export function useRemoveFromCart() {
  const { currentUser, setCurrentUser } = useContext(Context);

  if (!currentUser) {
    return null;
  }

  return (item: Product) =>
    removeFromCart(currentUser?.uid!, currentUser?.cart!, item).then(() => {
      onSnapshot(doc(db, "users", currentUser?.uid!), (doc) => {
        setCurrentUser(doc.data() as User);
      });
    });
}
