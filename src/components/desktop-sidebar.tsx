
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UsersRound,
  Video,
  MessageCircle,
  Library,
  UserCircle,
  Settings,
  GraduationCap,
  Bot,
  FileClock
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "/dashboard/channels", icon: UsersRound, label: "Channels" },
  { href: "/dashboard/meeting", icon: Video, label: "Meeting" },
  { href: "/dashboard/chat", icon: MessageCircle, label: "Chatbox" },
  { href: "/dashboard/library", icon: Library, label: "E-Library" },
  { href: "/dashboard/profile", icon: UserCircle, label: "Profile" },
];

const aiTools = [
    { href: "/dashboard/chat", icon: Bot, label: "AI Assistant" },
    { href: "/dashboard/meeting-recap", icon: FileClock, label: "Meeting Recap" },
]

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-card sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className="group flex h-9 w-full shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary md:h-8 md:text-base"
        >
          <GraduationCap className="h-6 w-6 transition-all group-hover:scale-110" />
          <span className="font-bold">EduVerse</span>
        </Link>
        <div className="w-full px-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === item.href && "bg-muted text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
        </div>
        <div className="w-full px-4">
            <p className="text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">AI Tools</p>
        </div>
        <div className="w-full px-2 space-y-1">
            {aiTools.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                pathname === item.href && "bg-muted text-primary"
                )}
            >
                <item.icon className="h-4 w-4" />
                {item.label}
            </Link>
            ))}
        </div>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <div className="w-full px-2">
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
            pathname === "/dashboard/settings" && "bg-muted text-primary"
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        </div>
      </nav>
    </aside>
  );
}
