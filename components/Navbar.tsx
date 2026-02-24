"use client";

import { use } from "react";
import Container from "./Container";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const isLoggedIn = useSession().status === "authenticated";

  return (
    <nav className="top-0 left-0 right-0 fixed py-6 border-b border-slate-800 bg-slate-900">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-normal md:text-lg font-semibold tracking-tight">
            Unified Inbox
          </h1>

          {isLoggedIn ? (<span className="flex gap-4">
          <a href="/dashboard">
              <button className="ml-4 bg-blue-600 hover:bg-blue-700 transition px-2 md:px-5 py-2 rounded-lg text-sm">
                Dashboard
              </button>
            </a>
          <a
              href="/api/auth/signout"
              className="border border-slate-700 hover:bg-slate-800 transition px-2 md:px-5 py-2 rounded-lg text-sm"
            >
              Logout
            </a>
          </span>
          ) : (
            <a
              href="/signin"
              className="border border-slate-700 hover:bg-slate-800 transition px-5 py-2 rounded-lg text-sm"
            >
              Login
            </a>
          )}
        </div>
      </Container>
    </nav>
  );
}