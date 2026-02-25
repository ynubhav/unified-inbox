import { Mail, MessageCircleCheckIcon } from "lucide-react";
import Container from "../Container";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900 border-t border-slate-800">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold tracking-tight">
            Built for Modern Marketing
          </h3>
          <p className="mt-4 text-slate-400">
            Everything you need to generate and send campaigns effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-indigo-500 transition">
            <h4 className="text-xl font-semibold flex items-center"><MessageCircleCheckIcon className="mr-2 w-5 h-5"/>WhatsApp Marketing </h4>
            <p className="mt-4 text-slate-400">
              Send AI-generated promotional messages directly to WhatsApp users
              using Twilio sandbox integration.
            </p>
          </div>

          <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl hover:border-indigo-500 transition">
            <h4 className="text-xl font-semibold flex items-center"><Mail className="mr-2 w-5 h-5"/>SMS Campaigns </h4>
            <p className="mt-4 text-slate-400">
              Instantly create and deliver SMS marketing messages with
              reliable API-based delivery.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}