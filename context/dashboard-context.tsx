"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Message = {
  id: string;
  platform: string;
  phone: string;
  headline: string;
  body: string;
  cta: string;
  status: string;
  createdAt: string;
};

type Analytics = {
  total: number;
  whatsapp: number;
  sms: number;
  sent: number;
  failed: number;
  successRate: number;
  recent: Message[];
};

type DashboardContextType = {
  analytics: Analytics | null;
  messages: Message[];
  loading: boolean;
  refresh: () => Promise<void>;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const [analyticsRes, messagesRes] = await Promise.all([
        fetch("/api/analytics"),
        fetch("/api/messages"),
      ]);

      const analyticsData = await analyticsRes.json();
      const messagesData = await messagesRes.json();

      setAnalytics(analyticsData);
      setMessages(messagesData.data || []);
    } catch (error) {
      console.error("Dashboard context error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        analytics,
        messages,
        loading,
        refresh: fetchData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }
  return context;
}