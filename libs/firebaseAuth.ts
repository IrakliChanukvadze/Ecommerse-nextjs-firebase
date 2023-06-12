import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export const SignUp = (
  email: string,
  password: string,
  setCurrentUser: ({}: User) => void
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = (
  email: string,
  password: string,
  setCurrentUser: ({}: User) => void
) => {
  return signInWithEmailAndPassword(auth, email, password);
};
