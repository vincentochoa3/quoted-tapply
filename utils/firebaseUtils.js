import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const addData = async (collection, id, data) => {
  let result;
  let error;
  try {
    result = await setDoc(doc(db, collection, id), data);
  } catch (e) {
    error = e;
  }
  return { result, error };
};
