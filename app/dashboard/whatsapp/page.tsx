"use client";

import { useState } from "react";

type GeneratedData = {
  headline: string;
  message: string;
  cta: string;
};

export default function WhatsAppPage() {
  const [context, setContext] = useState("");
  const [generatedData, setGeneratedData] = useState<GeneratedData | null>(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!context.trim()) return;

    setLoading(true);
    setGeneratedData(null);
    setStatus(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ context }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus(result.error || "Failed to generate");
        return;
      }

      const data = result.data ?? result;
      setGeneratedData(data);
    } catch (error) {
      console.error(error);
      setStatus("Generation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!generatedData || !phone) return;

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: "whatsapp",
          phone,
          headline: generatedData.headline,
          body:generatedData.message,
          cta: generatedData.cta,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus(result.error || "Failed to send");
        return;
      }

      setStatus("Message sent successfully 🎉");
    } catch (error) {
      console.error(error);
      setStatus("Sending failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">WhatsApp Inbox</h1>

      <textarea
        value={context}
        onChange={(e) => setContext(e.target.value)}
        placeholder="Describe your offer, audience, tone..."
        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 mb-4 text-white"
        rows={4}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg"
      >
        {loading ? "Generating..." : "Generate Message"}
      </button>

      {generatedData && (
        <div className="mt-8 bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-indigo-400">
            {generatedData.headline}
          </h2>

          <p className="mb-4">{generatedData.message}</p>

          <p className="text-sm text-slate-400 mb-4">
            CTA: {generatedData.cta}
          </p>

          <input
            type="text"
            placeholder="+91XXXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white mb-4"
          />

          <button
            onClick={handleSend}
            disabled={sending}
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg"
          >
            {sending ? "Sending..." : "Send via WhatsApp"}
          </button>
        </div>
      )}

      {status && (
        <div className="mt-4 text-sm text-slate-300">
          {status}
        </div>
      )}
    </div>
  );
}