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
      <div className="flex items-center gap-3">
        <Link href="/settings" className="text-sm font-semibold">
          Settings
        </Link>
        {authedUser ? (
          <button
            onClick={handleSignout}
            className="text-sm font-semibold py-2 px-3 bg-white border-2 text-blue-600 border-blue-600 rounded-md hover:bg-blue-50"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/sign-in"
            className="text-sm font-semibold py-2 px-3 bg-white border-2 text-blue-600 border-blue-600 rounded-md hover:bg-blue-50"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
