import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-slate-100 p-4 shadow-sm">
      <div>
        <a href="/" className="font-bold">
          "Quoted"
        </a>
      </div>
      <div>
        <a href="/sign-in" className="font-semibold">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
