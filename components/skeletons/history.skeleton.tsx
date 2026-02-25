export default function HistorySkeleton() {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6 animate-pulse">

        {/* Title */}
        <div className="h-8 w-48 bg-slate-800 rounded-md" />

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-12 bg-slate-800 rounded-lg" />
          <div className="w-full md:w-48 h-12 bg-slate-800 rounded-lg" />
        </div>

        {/* Message Cards */}
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 p-4 rounded-lg space-y-3"
            >
              <div className="h-3 w-40 bg-slate-700 rounded" />
              <div className="h-4 w-64 bg-slate-700 rounded" />
              <div className="h-3 w-52 bg-slate-700 rounded" />
              <div className="h-3 w-28 bg-slate-700 rounded" />
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE — INSIGHTS (Desktop Only) */}
      <aside className="hidden lg:block animate-pulse">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 sticky top-24">

          <div className="h-6 w-28 bg-slate-800 rounded" />

          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-24 bg-slate-800 rounded" />
              <div className="h-6 w-16 bg-slate-700 rounded" />
            </div>
          ))}

          <div className="border-t border-slate-800 pt-4 space-y-2">
            <div className="h-3 w-32 bg-slate-800 rounded" />
            <div className="h-4 w-40 bg-slate-700 rounded" />
          </div>

          <div className="h-20 bg-slate-800 rounded-lg" />

        </div>
      </aside>

    </div>
  );
}