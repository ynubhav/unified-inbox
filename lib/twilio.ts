import Twilio from "twilio";

const client = Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

// WhatsApp Sandbox sender
const WHATSAPP_FROM = "whatsapp:+14155238886"; // Twilio sandbox number

export async function sendWhatsApp(to: string, body: string) {
  return client.messages.create({
    body,
    from: WHATSAPP_FROM,
    to: `whatsapp:${to}`,
  });
}

export async function sendSMS(to: string, body: string) {
  return client.messages.create({
    body,
    from: process.env.TWILIO_PHONE_NUMBER!,
    to,
  });
}