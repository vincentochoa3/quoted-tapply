import { doc, setDoc, getDoc } from "firebase/firestore";
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

export const getData = async (collection, id) => {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
