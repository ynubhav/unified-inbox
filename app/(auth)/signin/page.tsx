"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

function IconGoogle() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M44.5 20H24v8.5h11.9C34.4 31.9 30 36 24 36 15.7 36 9 29.3 9 21s6.7-15 15-15c4 0 7.5 1.5 10.2 3.9l6.9-6.9C36.3 2.6 30.6 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c13.2 0 24-10.7 24-24 0-1.6-.1-3.1-.5-4.5z" fill="#FFC107" />
      <path d="M6.3 14.5 12.8 19C14.7 13.7 19.9 9.8 25.9 9.8c4 0 7.5 1.5 10.2 3.9l6.9-6.9C36.3 2.6 30.6 0 24 0 15.6 0 8.7 5.1 6.3 14.5z" fill="#FF3D00" />
      <path d="M24 48c6.6 0 12.3-2.6 16.7-6.9l-8-6.9C29.7 34.8 27 35.9 24 35.9c-6 0-10.4-4.1-11.9-8.6l-6.6 5.1C9 41.5 15.6 48 24 48z" fill="#4CAF50" />
      <path d="M44.5 20H24v8.5h11.9c-1.1 3.2-3.5 5.9-6.6 7.6l.1-.1 8 6.9C42.3 40.7 48 32.8 48 24c0-1.6-.1-3.1-.5-4.5z" fill="#1976D2" />
    </svg>
  );
}

export default function SignInPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Unified Inbox</h1>
          <p className="text-slate-400 mt-2">
            AI-powered messaging for modern teams
          </p>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
            <IconGoogle />
            
          {loading ? "Redirecting..." : "Continue with Google"}
        </button>

        {/* Divider */}
        <div className="my-6 border-t border-slate-800"></div>

        {/* Footer */}
        <p className="text-xs text-center text-slate-500">
          By continuing, you agree to our terms and privacy policy.
        </p>
      </div>
    </div>
  );
}