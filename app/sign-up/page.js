"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const { signUp } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password, confirmPassword);
    } catch (error) {
      setError(error);
    }
  };

  console.log("error", error);
  return (
    <div className="p-4">
      <h1>Sign Up for "Quoted"</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-sm p-2"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-sm p-2"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-sm p-2"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
