"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  MessageCircle,
  Mail,
  History,
  LogOut,
} from "lucide-react";

export default function Sidebar({ user }: { user: string }) {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
     ${pathname === path
        ? "bg-indigo-500 text-white"
        : "text-slate-400 hover:bg-slate-800"
      }`;

  return (
    <aside
      className="
        group h-screen bg-slate-950 border-r border-slate-800
        w-20 hover:w-64 transition-all duration-300
        flex flex-col justify-between
      "
    >
      {/* TOP */}
      <div className="p-4">

        {/* Logo */}
        <div className="flex items-center justify-center group-hover:justify-start gap-3 mb-10 transition-all">
          <LayoutDashboard className="w-6 h-6 text-indigo-500 shrink-0" />
          <span className="hidden group-hover:inline font-semibold text-lg whitespace-nowrap">
            Unified Inbox
          </span>
        </div>

        {/* Nav */}
        <nav className="space-y-3">

          <NavItem
            href="/dashboard"
            label="Home"
            Icon={LayoutDashboard}
            pathname={pathname}
          />

          <NavItem
            href="/dashboard/whatsapp"
            label="WhatsApp"
            Icon={MessageCircle}
            pathname={pathname}
          />

          <NavItem
            href="/dashboard/sms"
            label="SMS"
            Icon={Mail}
            pathname={pathname}
          />

          <NavItem
            href="/dashboard/history"
            label="History"
            Icon={History}
            pathname={pathname}
          />

        </nav>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-slate-800">

        <div className="mb-4 hidden group-hover:block">
          <p className="text-xs text-slate-500">Logged in as</p>
          <p className="text-sm font-medium truncate">{user}</p>
        </div>

        <button
          onClick={() => signOut()}
          className="flex items-center justify-center group-hover:justify-start gap-3 w-full px-4 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span className="hidden group-hover:inline whitespace-nowrap">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  href,
  label,
  Icon,
  pathname,
}: {
  href: string;
  label: string;
  Icon: any;
  pathname: string;
}) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center justify-center group-hover:justify-start
        gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${active
          ? "bg-indigo-500 text-white"
          : "text-slate-400 hover:bg-slate-800"
        }
      `}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="hidden group-hover:inline whitespace-nowrap">
        {label}
      </span>
    </Link>
  );
}