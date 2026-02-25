export function Stats() {
  return (
    <section className="py-20 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Stat number="100,000+" label="Messages Processed" />
          <Stat number="98.4%" label="Delivery Success Rate" />
          <Stat number="2,500+" label="Campaigns Launched" />
          <Stat number="500+" label="Active Users" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="stat-animate stat-animate-hover">
      <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
        {number}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}
