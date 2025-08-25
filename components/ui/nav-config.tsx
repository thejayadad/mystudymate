
import { FiHome, FiBookOpen, FiAward, FiSettings } from "react-icons/fi";
import { ReactNode } from "react";

export type NavItem = { href: string; label: string; icon?: ReactNode };

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: <FiHome className="w-4 h-4" /> },
  { href: "/courses", label: "Courses", icon: <FiBookOpen className="w-4 h-4" /> },
  { href: "/leaderboard", label: "Leaderboard", icon: <FiAward className="w-4 h-4" /> },
  { href: "/settings", label: "Settings", icon: <FiSettings className="w-4 h-4" /> },
];
