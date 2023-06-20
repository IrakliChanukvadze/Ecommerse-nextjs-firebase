import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
type Props = {
  from: string;
  amount: number;
  type: "deposit" | "withdrow";
  uid: string;
  transferId: string;
  messages:
    | {
        from: string;
        newMessage: string;
        userId: string;
        transferId: string;
        amount: number;
      }[]
    | [];
};

export const BalanceRequest = async (props: Props) => {
  const message = `Request to ${props.type} ${props.amount} $`;
  const usersRef = doc(db, "users", "jtybkYNt1lL7rfEFXXDG");

  await updateDoc(usersRef, {
    messages: [
      {
        from: props.from,
        message,
        transferId: props.transferId,
        userId: props.uid,
        amount: props.amount,
        type: props.type,
      },
      ...props.messages,
    ],
  });
};
