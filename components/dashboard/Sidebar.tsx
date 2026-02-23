"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Sidebar({ user }: { user: string }) {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    `block px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-indigo-500 text-white"
        : "text-slate-400 hover:bg-slate-800"
    }`;

  return (
    <aside className="w-64 border-r border-slate-800 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold mb-8">Unified Inbox</h2>

        <nav className="space-y-3">
          <Link href="/dashboard/whatsapp" className={linkStyle("/dashboard/whatsapp")}>
            WhatsApp
          </Link>
          <Link href="/dashboard/sms" className={linkStyle("/dashboard/sms")}>
            SMS
          </Link>
        </nav>
      </div>

      <div>
        <p className="text-sm text-slate-400 mb-3">Logged in as</p>
        <p className="text-sm font-medium mb-4">{user}</p>

        <button
          onClick={() => signOut()}
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}