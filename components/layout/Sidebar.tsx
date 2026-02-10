"use client"

import { Home, Grid3X3, Bot, BarChart3, MessageCircleQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { icon: Home, label: "My Dashboard", path: "/dashboard" },
  { icon: Grid3X3, label: "Mock Exams", path: "/mock-exams" },
  { icon: Bot, label: "Study with AI", path: "/study-ai" },
  { icon: BarChart3, label: "Track Progress", path: "/progress" },
  { icon: MessageCircleQuestion, label: "Chat support", path: "/support" },
];

export const Sidebar = () => {
  const location = usePathname();

  return (
    <aside className="w-64 bg-card border-r border-border h-[calc(100vh-4rem)] p-4 flex flex-col">
      <nav className="space-y-1 ">
        {navItems.map((item) => {
          const isActive = location === item.path ||
            (item.path === "/dashboard" && location === "/");

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Button
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-10"
        asChild
      >
        <Link href="/practice">Start Practice</Link>
      </Button>
    </aside>
  );
};
