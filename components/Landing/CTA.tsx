import Container from "../Container";

export default function CTA() {
  return (
    <section className="py-24 border-t border-slate-800">
      <Container>
        <div className="text-center">
          <h3 className="text-3xl font-semibold tracking-tight">
            Start Sending Smarter Campaigns Today
          </h3>

          <a
            href="/dashboard"
            className="mt-8 inline-block bg-indigo-500 hover:bg-indigo-600 transition-colors px-6 py-3 rounded-lg font-medium"
          >
            Launch Dashboard
          </a>
        </div>
      </Container>
    </section>
  );
}