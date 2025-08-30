import { DesktopSidebar } from "@/components/desktop-sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { BottomNav } from "@/components/bottom-nav";
import { DesktopHeader } from "@/components/desktop-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <DesktopSidebar />
      <div className="flex flex-col sm:pl-64">
        <MobileHeader />
        <DesktopHeader />
        <main className="flex-1 bg-muted/40 p-4 md:p-6 lg:p-8 pb-24 sm:pb-8">
            {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
