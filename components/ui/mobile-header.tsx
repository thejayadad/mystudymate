"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./logo";
import NavList from "./nav-list";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const openMenu = useCallback(() => setOpen(true), []);

  // esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // lock body scroll
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [open]);

  return (
    <>
      <header className="z-40 flex items-center justify-between py-3 bg-white/80 backdrop-blur">
        <button
          onClick={openMenu}
          aria-label="Open menu"
          className="inline-flex items-center gap-2 mr-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50 active:scale-[0.98] transition"
        >
          <FiMenu className="w-5 h-5" />
          <span className="sr-only">Open navigation</span>
        </button>
        <Logo />
        <div className="w-9" />
      </header>

      {/* overlay + drawer */}
      <div aria-hidden={!open}>
        <div
          onClick={close}
          className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />
        <aside
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-lg transition-transform duration-300 will-change-transform
            ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 border-dotted">
            <div className="font-semibold">Menu</div>
            <button
              onClick={close}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-2.5 py-2 hover:bg-neutral-50 active:scale-[0.98] transition"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Reusable list here */}
          <NavList onNavigate={close} className="p-2" />
        </aside>
      </div>
    </>
  );
};

export default MobileHeader;
