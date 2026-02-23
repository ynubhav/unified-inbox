import Container from "../Container";

export default function Hero() {
  return (
    <section className="py-28 min-h-screen flex items-center">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Generate{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Marketing Messages Instantly
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Create high-converting WhatsApp and SMS campaigns in seconds and
            deliver them directly to your audience with seamless integration.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/api/auth/signin"
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-6 py-3 rounded-lg font-medium"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="border border-slate-700 hover:bg-slate-800 transition px-6 py-3 rounded-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}