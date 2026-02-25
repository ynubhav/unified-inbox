export function Howitworks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Describe Your Campaign
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enter your marketing context, audience, and tone. Our AI instantly
              drafts a structured, ready-to-send message.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Review & Edit</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fine-tune the headline, message, and CTA before sending. Stay in
              control while saving time.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Send & Track</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Deliver messages via WhatsApp or SMS and monitor performance
              through built-in analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
