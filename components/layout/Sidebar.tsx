"use client"

import { Home, Grid3X3, Bot, BarChart3, MessageCircleQuestion, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "My Dashboard", path: "/dashboard" },
  { icon: Home, label: "Admin Dashboard", path: "/admin" },
  { icon: Grid3X3, label: "Mock Exams", path: "/mock-exams" },
  { icon: Bot, label: "Study with AI", path: "/study-ai" },
  { icon: BarChart3, label: "Track Progress", path: "/progress" },
  { icon: MessageCircleQuestion, label: "Chat support", path: "/support" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-collapse on mobile for better UX
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle sidebar collapse/expand
  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const sidebarWidth = isCollapsed ? "w-16" : "w-64";
  const mobileSidebarClass = isMobileMenuOpen ? "translate-x-0" : "-translate-x-full";

  // Main content class - adjusts based on sidebar state (desktop only)
  const mainContentClass = isMobile || isCollapsed ? "md:ml-16" : "md:ml-64";

  // Check active path
  const isActive = (path: string) => {
    return pathname === path || (path === "/dashboard" && pathname === "/");
  };

  // Mobile menu button for header (you might want to place this in your layout/header)
  const MobileMenuButton = () => (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <Menu className="h-5 w-5" />
    </Button>
  );

  return (
    <>
      {/* Mobile Menu Button - You should add this to your header/layout */}
      <MobileMenuButton />

      {/* Backdrop for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-16 bg-card border-r border-border h-[calc(100vh-4rem)]",
          "z-50 transition-all duration-300 ease-in-out",
          // Desktop styles
          sidebarWidth,
          // Mobile styles
          "md:translate-x-0 md:transition-width",
          isMobile && [
            "fixed top-0 left-0 h-screen w-40",
            "transition-transform duration-300 ease-in-out",
            mobileSidebarClass,
            "pt-16" // Account for header height
          ]
        )}
      >
        <div className="h-full flex flex-col p-4">
          {/* Collapse toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute -right-3 top-6 h-6 w-6 rounded-full border bg-background hidden md:flex",
              "hover:bg-muted z-10"
            )}
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>

          {/* Navigation */}
          <nav className={cn("space-y-1 ", isCollapsed && "items-center")}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                    active
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    isCollapsed && "justify-center px-3"
                  )}
                  title={isCollapsed ? item.label : ""}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span
                    className={cn(
                      "transition-opacity duration-200",
                      isCollapsed
                        ? "opacity-0 w-0 overflow-hidden absolute"
                        : "opacity-100"
                    )}
                  >
                    {item.label}
                  </span>
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Practice Button */}
          <Button
            className={cn(
              " mt-14",
              isCollapsed && "px-3"
            )}
            asChild
          >
            <Link
              href="/practice"
              className={cn(
                "flex items-center justify-center gap-2",
                isCollapsed && "justify-center"
              )}
            >
              <span className={cn(isCollapsed && "sr-only md:not-sr-only")}>
                Start Practice
              </span>
              {isCollapsed && (
                <span className="md:hidden">Start</span>
              )}
            </Link>
          </Button>
        </div>
      </aside>

      {/* Main Content Wrapper - Add this to your layout where main content goes */}

    </>
  );
};