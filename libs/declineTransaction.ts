import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
type Props = {
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
export const declineTransaction = async (props: Props) => {
  const adminsRef = doc(db, "users", "jtybkYNt1lL7rfEFXXDG");
  await updateDoc(adminsRef, {
    messages: [...props.messages],
  });
};
