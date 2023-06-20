import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
type Props = {
  price: number;
  title: string;
  id: string;
};
export const editPost = async (props: Props) => {
  const productsRef = doc(db, "products", props.id);

  await updateDoc(productsRef, {
    title: props.title,
    price: props.price,
  });
};
