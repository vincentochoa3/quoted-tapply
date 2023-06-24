"use client";
import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import Loading from "../components/Loading";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthedUser(user);
      } else {
        setAuthedUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("in signup context error");
      throw new Error("Someting went wrong. Please try again.");
    }
  };
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error("Someting went wrong. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error("Someting went wrong. Please try again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ authedUser, loading, setLoading, signUp, login, logout }}
    >
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
