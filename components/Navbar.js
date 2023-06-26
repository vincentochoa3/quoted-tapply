"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { authedUser, logout } = useAuth();
  const router = useRouter();

  const handleSignout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="w-full h-16 flex justify-between items-center bg-slate-100 p-4 shadow-sm">
      <div>
        <Link href="/" className="font-bold">
          &quot;Quoted&quot;
        </Link>
      </div>
      <div>
        {authedUser ? (
          <button onClick={handleSignout} className="font-semibold">
            Logout
          </button>
        ) : (
          <Link href="/sign-in" className="font-semibold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
