"use client"

import { Search, Bell, LogIn, UserPlus2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  showSearch?: boolean;
  showAuth?: boolean;
  userName?: string;
}

export const Header = ({ showSearch = true, showAuth = false, userName = "Emma Okonkwo" }: HeaderProps) => {
  const isMobile = useIsMobile();
  console.log({ isMobile })
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="font-semibold text-foreground">Sitename/Logo here</div>

      </div>

      <div className="flex items-center gap-4">
        {showAuth ? (
          <>
            <Button variant="default" size={isMobile ? "icon" : "xxl"}>{isMobile ? <UserPlus2Icon /> : "Create account"}</Button>
            <Link href={"/dashboard"}>
              <Button variant="outline" size={isMobile ? "icon" : "xxl"} className="text-2xl">
                {isMobile ? <LogIn /> : " Log in"}</Button>
            </Link>
          </>
        ) : (
          <>
            {/* Bell hidden on very small screens */}
            <button className="hidden sm:flex p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 md:h-9 md:w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>EO</AvatarFallback>
              </Avatar>

              {/* Hide name on small screens */}
              <span className="hidden md:inline font-medium text-sm">
                {userName}
              </span>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
