
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NavItem } from "./nav-config";

type Props = NavItem & {
  onNavigate?: () => void;
  size?: "sm" | "md";           // quick size control (text & padding)
  rounded?: "md" | "lg" | "xl"; // corner radius
};

export default function NavLink({ href, label, icon, onNavigate, size = "md", rounded = "lg" }: Props) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  const base = "flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";
  const padd = size === "sm" ? "px-2.5 py-2 text-sm" : "px-3 py-2 text-sm";
  const shape = rounded === "xl" ? "rounded-xl" : rounded === "lg" ? "rounded-lg" : "rounded-md";
  const state = active
    ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
    : "hover:bg-neutral-50 text-neutral-700 border border-transparent";

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={clsx(base, padd, shape, state, "transition")}
    >
      {icon && <span className={clsx("shrink-0", active ? "text-indigo-600" : "text-neutral-500")}>{icon}</span>}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
