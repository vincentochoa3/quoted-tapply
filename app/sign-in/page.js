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
    <div className="flex flex-col gap-8 w-full max-w-[500px]">
      <h1 className="text-2xl text-blue-600 font-semibold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-blue-600">
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
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-blue-600">
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
        </div>
        <p className={`hidden ${error && "block"}`}>ksjdnfkjdsnc</p>
        <button className="self-end w-1/3 p-2 bg-blue-600 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
