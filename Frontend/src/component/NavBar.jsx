import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Brand Logo */}
      <h1 className="text-2xl font-bold text-[#3B1E54] tracking-wide">
        short<span className="text-[#9B7EBD]">LY</span>
      </h1>

      {/* Login Button */}
      <button className="bg-[#3B1E54] text-white px-5 py-2 cursor-pointer rounded-full text-sm font-medium hover:bg-[#2d1540] transition duration-300">
        Log In
      </button>
    </div>
  );
};

export default NavBar;
