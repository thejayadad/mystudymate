"use client";

import { NAV_ITEMS, NavItem } from "./nav-config";
import NavLink from "./nav-links";

type Props = {
  items?: NavItem[];
  onNavigate?: () => void;  // useful for closing mobile drawer
  className?: string;
};

export default function NavList({ items = NAV_ITEMS, onNavigate, className }: Props) {
  return (
    <nav className={className}>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <NavLink {...it} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
