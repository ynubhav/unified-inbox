"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="mt-6 bg-indigo-500 hover:bg-indigo-600 transition px-5 py-2 rounded-lg"
    >
      Logout
    </button>
  );
}