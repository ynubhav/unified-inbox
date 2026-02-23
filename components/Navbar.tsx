import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="py-6 border-b border-slate-800">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold tracking-tight">
            Unified Inbox
          </h1>

          <a
            href="/api/auth/signin"
            className="border border-slate-700 hover:bg-slate-800 transition px-5 py-2 rounded-lg text-sm"
          >
            Login
          </a>
        </div>
      </Container>
    </nav>
  );
}