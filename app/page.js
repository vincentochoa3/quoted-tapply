"use client";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { authedUser } = useAuth();

  console.log(authedUser);
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between p-4">
      <div className="w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1>Welcome to Quoted</h1>
      </div>
    </main>
  );
}
