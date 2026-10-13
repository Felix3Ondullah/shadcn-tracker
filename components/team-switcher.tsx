"use client";
import { useSidebarState } from "@/components/app-sidebar";
export function TeamSwitcher() { const { open } = useSidebarState(); return <button className="workspace-switcher" title={!open ? "Acme Corp." : undefined}><span className="workspace-logo">✣</span><span className="workspace-name">Acme Corp.</span><span className="switch-chevron">⌄</span></button>; }
