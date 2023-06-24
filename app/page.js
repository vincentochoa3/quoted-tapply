"use client";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { authedUser } = useAuth();

  console.log(authedUser);
  return (
    <main>
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1>Welcome to Quoted</h1>
      </div>
    </main>
  );
}
