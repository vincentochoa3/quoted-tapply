import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-gray-900 p-4">
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
