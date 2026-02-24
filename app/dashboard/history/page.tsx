"use client";

import { useDashboard } from "@/context/dashboard-context";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const { messages, loading } = useDashboard();

  if (loading) return <div>Loading history...</div>;
  if (!messages) return <div>No messages found.</div>;

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Message History</h1>

      <div className="space-y-4">
        {messages.map((msg: any) => (
          <div
            key={msg.id}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div className="text-sm text-slate-400">
              {msg.platform} → {msg.phone}
            </div>
            <div className="font-semibold">{msg.headline}</div>
            <div className="text-slate-300">{msg.body}</div>
            <div className="text-indigo-400 text-sm">{msg.cta}</div>
            <div className="text-xs text-slate-500 mt-2">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}