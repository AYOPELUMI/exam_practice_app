import AdminSidebar from "@/components/layout/AdminSidebar";
import { Header } from "@/components/layout/Header";
import { ReactNode } from "react";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};
