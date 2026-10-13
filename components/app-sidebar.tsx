"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavWorkspaces } from "@/components/nav-workspaces";
import { TeamSwitcher } from "@/components/team-switcher";

const SidebarState = createContext({ open: true, toggle: () => {} });
export const useSidebarState = () => useContext(SidebarState);

export function AppSidebar({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(true);
  return <SidebarState.Provider value={{ open, toggle: () => setOpen(value => !value) }}><aside className={`sidebar ${open ? "" : "sidebar-icon-only"}`}><TeamSwitcher/><NavMain/><NavFavorites/><NavWorkspaces/><NavSecondary/>{children}</aside></SidebarState.Provider>;
}
