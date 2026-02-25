export function MessageGeneratingSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse">

      {/* Headline */}
      <div className="space-y-2">
        <div className="h-3 w-24 bg-slate-700 rounded" />
        <div className="h-8 w-full bg-slate-800 rounded-lg" />
      </div>

      {/* Body */}
      <div className="space-y-2">
        <div className="h-3 w-20 bg-slate-700 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-800 rounded" />
          <div className="h-4 w-11/12 bg-slate-800 rounded" />
          <div className="h-4 w-10/12 bg-slate-800 rounded" />
          <div className="h-4 w-8/12 bg-slate-800 rounded" />
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-2">
        <div className="h-3 w-16 bg-slate-700 rounded" />
        <div className="h-8 w-1/2 bg-slate-800 rounded-lg" />
      </div>

      {/* Phone Input */}
      <div className="h-10 w-full bg-slate-800 rounded-lg" />

      {/* Send Button */}
      <div className="h-11 w-full bg-indigo-500/20 rounded-lg" />

    </div>
  );
}