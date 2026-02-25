"use client";

import HistorySkeleton from "@/components/skeletons/history.skeleton";
import { useDashboard } from "@/context/dashboard-context";
import { useState, useMemo } from "react";

export default function HistoryPage() {
  const { messages, loading } = useDashboard();

  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("ALL");

  const filteredMessages = useMemo(() => {
    if (!messages) return [];

    return messages.filter((msg: any) => {
      const matchesSearch =
        msg.phone?.toLowerCase().includes(search.toLowerCase()) ||
        msg.headline?.toLowerCase().includes(search.toLowerCase()) ||
        msg.body?.toLowerCase().includes(search.toLowerCase());

      const matchesPlatform =
        platformFilter === "ALL" ||
        msg.platform?.toUpperCase() === platformFilter;

      return matchesSearch && matchesPlatform;
    });
  }, [messages, search, platformFilter]);

  if (loading) return <HistorySkeleton />;
  if (!messages) return <div>No messages found.</div>;

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">Message History</h1>

        {/* Search + Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by phone, headline, or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg p-3 text-white text-sm"
          />

          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer"
          >
            <option value="ALL">All Platforms</option>
            <option value="WHATSAPP">WhatsApp</option>
            <option value="SMS">SMS</option>
          </select>
        </div>

        {/* Message List */}
        <div className="space-y-4">
          {filteredMessages.length === 0 ? (
            <div className="text-slate-400 text-sm">
              No messages match your search.
            </div>
          ) : (
            filteredMessages.map((msg: any) => (
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
            ))
          )}
        </div>
      </div>
      {/* Insights Panel */}
      <aside className="hidden lg:block">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 sticky top-24">
          <h2 className="text-lg font-semibold text-slate-300">Insights</h2>

          <InsightItem label="Total Results" value={filteredMessages.length} />

          <InsightItem
            label="WhatsApp"
            value={
              filteredMessages.filter((m: any) => m.platform === "WHATSAPP")
                .length
            }
          />

          <InsightItem
            label="SMS"
            value={
              filteredMessages.filter((m: any) => m.platform === "SMS").length
            }
          />

          <div className="border-t border-slate-800 pt-4">
            <p className="text-xs text-slate-500 mb-2">Latest Activity</p>
            <p className="text-sm text-slate-300">
              {filteredMessages.length > 0
                ? new Date(filteredMessages[0].createdAt).toLocaleString()
                : "No activity yet"}
            </p>
          </div>

          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
            <p className="text-xs text-indigo-300 font-medium mb-1">Pro Tip</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use filters to quickly isolate platform-specific performance and
              refine campaign strategies.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function InsightItem({ label, value }: { label: string; value: any }) {
  return (
    <div>
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-indigo-400">{value}</p>
    </div>
  );
}
