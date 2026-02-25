"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Toaster position="top-center" theme="dark" gap={12} toastOptions={{style:{backgroundColor:"midnightblue"}}}/>
        {children}
    </SessionProvider>
  );
}
