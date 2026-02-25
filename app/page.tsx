import Navbar from "@/components/Navbar";
import Hero from "@/components//Landing/Hero";
import Features from "@/components/Landing/Features";
import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Footer";
import { Howitworks } from "@/components/Landing/Howitworks";
import { Stats } from "@/components/Landing/Stats";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Howitworks/>
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}