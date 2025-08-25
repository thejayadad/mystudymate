import React from "react";
import { PiBookOpenTextBold, PiSparkleFill } from "react-icons/pi"; // phosphor icons (can swap)

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Icon wrapper */}
      <div className="relative lg:flex items-center justify-center hidden w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
        <PiBookOpenTextBold className="w-6 h-6" />
        <PiSparkleFill className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse" />
      </div>
      
      {/* Text part */}
      <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
        Learnly
      </span>
    </div>
  );
};

export default Logo;
