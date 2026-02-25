import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="text-center max-w-lg">

        <h1 className="text-7xl font-bold bg-linear-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent mb-6">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/dashboard"
          className="
            inline-block px-6 py-3 rounded-lg
            bg-indigo-500 hover:bg-indigo-600
            transition font-medium
          "
        >
          Go Back to Dashboard
        </Link>

      </div>
    </div>
  );
}