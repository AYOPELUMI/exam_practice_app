import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar

        />
        <main className={cn(
          "flex-1 p-6 transition-all duration-300",
        )}>
          {children}
        </main>
      </div>
    </div>
  );
};
