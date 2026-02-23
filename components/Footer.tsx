import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800">
      <Container>
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Unified Inbox. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}