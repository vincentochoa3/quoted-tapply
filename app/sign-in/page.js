"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      console.log("in signup error");
      setError(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[500px]">
      <h1 className="text-lg font-bold">Login to "Quoted"</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-sm p-2"
        />
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-sm p-2"
        />
        <button className="p-2 bg-blue-700 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
