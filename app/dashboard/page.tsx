"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/analytics")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading analytics...</div>;

  return (
    <div className="max-w-6xl space-y-8">

      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card title="Total Messages" value={data.total} />
        <Card title="WhatsApp" value={data.whatsapp} />
        <Card title="SMS" value={data.sms} />
        <Card title="Success Rate" value={`${data.successRate}%`} />

      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

        <div className="space-y-4">
          {data.recent.map((msg: any) => (
            <div
              key={msg.id}
              className="bg-slate-800 border border-slate-700 p-4 rounded-lg"
            >
              <div className="text-sm text-slate-400">
                {msg.platform} → {msg.phone}
              </div>
              <div className="font-semibold">{msg.headline}</div>
              <div className="text-slate-300 text-sm">{msg.body}</div>
              <div className="text-xs text-slate-500 mt-2">
                {new Date(msg.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function Card({ title, value }: { title: string; value: any }) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
      <div className="text-sm text-slate-400">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  );
}