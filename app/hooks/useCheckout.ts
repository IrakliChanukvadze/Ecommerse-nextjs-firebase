import { Context } from "@/Context/context";
import { addToCart } from "@/libs/addToCart";
import { checkout } from "@/libs/checkout";
import { db } from "@/libs/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";

export function useCheckout(
  total: number,
  errorSetter: React.Dispatch<React.SetStateAction<boolean>>
) {
  const { currentUser, setCurrentUser } = useContext(Context);

  if (!currentUser) {
    return null;
  }

  return () => {
    if (currentUser?.balance >= total) {
      checkout(
        currentUser?.uid!,
        currentUser?.cart!,
        total,
        currentUser?.balance
      ).then(() => {
        onSnapshot(doc(db, "users", currentUser?.uid!), (doc) => {
          setCurrentUser(doc.data() as User);
        });
      });
      errorSetter(false);
    } else {
      errorSetter(true);
    }
  };
}
