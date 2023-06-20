import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getCurrentUser } from "./getCurrentUser";
type Props = {
  from: string;
  message: string;
  transferId: string;
  userId: string;
  amount: number;
  type: "deposit" | "withdrow";
  messages:
    | {
        from: string;
        message: string;
        transferId: string;
        userId: string;
        amount: number;
        type: string;
      }[]
    | [];
};
export const acceptTransaction = async (props: Props) => {
  const productsRef = doc(db, "users", props.userId);

  const user = await getCurrentUser(props.from);
  const adminsRef = doc(db, "users", "jtybkYNt1lL7rfEFXXDG");
  await updateDoc(adminsRef, {
    messages: [...props.messages],
  });
  await updateDoc(productsRef, {
    balance:
      props.type === "deposit"
        ? user[0].balance + props.amount
        : user[0].balance - props.amount,
  });
};
