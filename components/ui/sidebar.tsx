"use client";

import React from "react";
import Logo from "./logo";
import NavList from "./nav-list";

const SideBar = () => {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 border-r h-full border-neutral-200 border-dotted bg-white">
      <div className="px-4 py-4 border-b border-neutral-200 border-dotted">
        <Logo />
      </div>
      <div className="p-3">
        <NavList />
      </div>
    </aside>
  );
};

export default SideBar;
