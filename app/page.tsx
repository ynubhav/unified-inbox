import Navbar from "@/components/Navbar";
import Hero from "@/components//Landing/Hero";
import Features from "@/components/Landing/Features";
import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}