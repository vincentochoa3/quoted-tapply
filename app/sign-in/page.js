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
    <div className="flex flex-col gap-12 w-full max-w-[500px]">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-blue-600 font-semibold">Login</h1>
        <span className="text-sm text-gray-400">
          Dont have an account?
          <Link href="/sign-up" className="ml-1 text-blue-600 hover:underline">
            Sign Up
          </Link>
        </span>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm text-gray-400 font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 p-2 text-blue-600 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm text-gray-400 font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 p-2 text-blue-600 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <p className={`hidden ${error && "block"}`}>{error}</p>
        <button className="self-end w-1/3 p-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
