"use client";

import { MessageGeneratingSkeleton } from "@/components/skeletons/generating.skeleton";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

type GeneratedData = {
  headline: string;
  message: string;
  cta: string;
};

export default function WhatsAppPage() {
  const [context, setContext] = useState("");
  const [generatedData, setGeneratedData] = useState<GeneratedData | null>(
    null,
  );
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!context.trim()) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: context + ".Generate for WhatsApp message.",
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus(result.error || "Failed to generate");
        toast.error(result.error || "Failed to generate message");
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

    const idtoast = toast.loading("Sending message...");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: "whatsapp",
          phone,
          headline: generatedData.headline,
          body: generatedData.message,
          cta: generatedData.cta,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Failed to send message", { id: idtoast });
        setStatus(result.error || "Failed to send");
        return;
      }

      toast.success("Message sent successfully", { id: idtoast });
      setStatus("Message sent successfully 🎉");
    } catch (error) {
      console.error(error);
      setStatus("Sending failed");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-7xl ">
      <h1 className=" flex items-center gap-2 text-3xl font-bold mb-8"><Image src="/whatsapp.svg" width={28} height={28} alt="WhatsApp Icon"/>WhatsApp Inbox</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT — MESSAGE PREVIEW / EDIT */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl md:p-6 p-3 space-y-2">
          <h2 className="text-lg font-semibold text-slate-300">
            Message Preview
          </h2>

          {loading ? (
            <MessageGeneratingSkeleton />
          ) : generatedData ? (
            <>
              {/* Headline */}
              <div>
                <label className="text-xs text-slate-500 mb-2 block">
                  Headline
                </label>
                <input
                  value={generatedData.headline}
                  onChange={(e) =>
                    setGeneratedData({
                      ...generatedData,
                      headline: e.target.value,
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none"
                />
              </div>

              {/* Body */}
              <div>
                <label className="text-xs text-slate-500 mb-1 block">
                  Message
                </label>
                <textarea
                  value={generatedData.message}
                  onChange={(e) =>
                    setGeneratedData({
                      ...generatedData,
                      message: e.target.value,
                    })
                  }
                  rows={6}
                  className="w-full max-h-30 bg-slate-800 border border-slate-700 rounded-lg p-3 text-white scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800 focus:outline-none"
                />
              </div>

              {/* CTA */}
              <div>
                <label className="text-xs text-slate-500 mb-1 block">
                  Call To Action
                </label>
                <input
                  value={generatedData.cta}
                  onChange={(e) =>
                    setGeneratedData({
                      ...generatedData,
                      cta: e.target.value,
                    })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs text-slate-500 mb-1 block">
                  Recipient Phone
                </label>
                <input
                  type="text"
                  placeholder="+91XXXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none"
                />
              </div>

              <button
                onClick={handleSend}
                disabled={sending}
                className="w-full bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-lg font-medium"
              >
                {sending ? "Sending..." : "Send via WhatsApp"}
              </button>
            </>
          ) : (
            <div className="text-slate-500 text-sm">
              Generate a message to preview it here.
            </div>
          )}
        </div>

        {/* RIGHT — AI PROMPTING */}
        <div className="bg-slate-900 h-min border border-slate-800 rounded-xl md:p-6 p-3 space-y-6">
          <h2 className="text-lg font-semibold text-slate-300">AI Prompt</h2>

          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Describe your offer, audience, tone..."
            rows={6}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white focus:outline-none max-h-20 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800"
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
    w-full relative overflow-hidden
    bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500
    hover:cursor-pointer
    hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-400
    transition-all duration-300
    py-3 rounded-lg font-medium
    shadow-lg shadow-indigo-500/20
    hover:shadow-indigo-500/40
    hover:-translate-y-px
    active:translate-y-0
    disabled:opacity-60 disabled:cursor-not-allowed
  "
          >
            <span className="relative z-10 flex items-center justify-center">
              {loading ? (
                <>
                  <Loader2 className="animate-spin size-4 mr-2" />
                  Generating...
                </>
              ) : (
                <>✨ Generate Message</>
              )}
            </span>

            {/* subtle shine effect */}
            <span className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
