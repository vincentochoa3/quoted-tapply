"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addData } from "../../utils/firebaseUtils";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signUp(email, password, confirmPassword);
      const data = { userId: user.uid, email };
      await addData("users", user.uid, data);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-[500px]">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        <span className="text-sm text-gray-400">
          Dont have an account?
          <Link href="/sign-in" className="ml-1 text-blue-600 hover:underline">
            Login
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
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-400 font-semibold"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-b-2 p-2 text-blue-600 focus:border-blue-600 focus:outline-none"
          />
        </div>
        <button className="self-end w-1/3 p-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
