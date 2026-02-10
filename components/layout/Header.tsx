import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  showSearch?: boolean;
  showAuth?: boolean;
  userName?: string;
}

export const Header = ({ showSearch = true, showAuth = false, userName = "Emma Okonkwo" }: HeaderProps) => {
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="font-semibold text-foreground">Sitename/Logo here</div>

        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-9 w-64 bg-background border-border"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {showAuth ? (
          <>
            <Button variant="default" size="xxl">Create account</Button>
            <Link href={"/dashboard"}>
              <Button variant="outline" size="xxl" className="text-2xl">
                Log in</Button>
            </Link>
          </>
        ) : (
          <>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
            </button>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>EO</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">{userName}</span>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
