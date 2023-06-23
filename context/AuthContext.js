"use client";
import { createContext, useContext, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  EmailAuthProvider,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, confirmPassword) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setAuthedUser(user);
    } catch (error) {
      throw new Error("Someting went wrong. Please try again.");
    }
  };
  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setAuthedUser(user);
    } catch (error) {
      throw new Error("Someting went wrong. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setAuthedUser(null);
    } catch (error) {
      throw new Error("Someting went wrong. Please try again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ authedUser, loading, setLoading, signUp, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
