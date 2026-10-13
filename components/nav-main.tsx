"use client";

import { usePathname } from "next/navigation";
import { useSidebarState } from "@/components/app-sidebar";

const items = [["Search", "⌕"], ["Ask AI", "✧"], ["Home", "⌂"], ["Inbox", "▱"]];
export function NavMain() {
  const pathname = usePathname();
  const { open } = useSidebarState();
  return <nav className="primary-nav" aria-label="Main navigation">{items.map(([label, icon]) => <button key={label} className={`nav-item ${label === "Home" && pathname === "/dashboard" ? "selected" : ""}`} title={!open ? label : undefined}><span className="nav-icon-text">{icon}</span><span>{label}</span>{label === "Inbox" && <span className="inbox-count">3</span>}</button>)}</nav>;
}
