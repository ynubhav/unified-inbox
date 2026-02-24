import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Sidebar from "@/components/dashboard/Sidebar";
import { DashboardProvider } from "@/context/dashboard-context";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar user={session.user?.name || "User"} />
        <main className="flex-1 p-10">{children}</main>
      </div>
    </DashboardProvider>
  );
}