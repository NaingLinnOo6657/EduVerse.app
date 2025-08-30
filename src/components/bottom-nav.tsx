
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UsersRound, Video, MessageCircle, Library, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/dashboard/channels", icon: UsersRound, label: "Channels" },
  { href: "/dashboard/meeting", icon: Video, label: "Meeting" },
  { href: "/dashboard/chat", icon: MessageCircle, label: "Chat" },
  { href: "/dashboard/library", icon: Library, label: "Library" },
  { href: "/dashboard/profile", icon: UserCircle, label: "Profile"},
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 border-t bg-card p-2 sm:hidden">
      <div className="grid grid-cols-6 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 rounded-lg p-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary",
              pathname === item.href && "text-primary bg-muted"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs truncate">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
