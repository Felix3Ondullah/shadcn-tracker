import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Management & Task Tracking | Acme Corp.",
  description: "A clear view of your team's projects, tasks, and progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
