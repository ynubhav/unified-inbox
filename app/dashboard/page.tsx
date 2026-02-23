import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "@/components/dashboard/LogoutButton";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome, {session.user?.name}
      </h1>

      <LogoutButton />
    </div>
  );
}