"use client";
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
    <div className="flex flex-col gap-4 w-full max-w-[500px]">
      <h1 className="text-lg font-bold">Sign Up for &quot;Quoted&quot;</h1>
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
        <label htmlFor="confirmPassword" className="font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-sm p-2"
        />
        <button className="p-2 bg-blue-700 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
