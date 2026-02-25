# Unified Inbox

AI-powered multi-channel messaging platform built with **Next.js, Prisma, Neon, Gemini, and Twilio**.

This project allows users to generate AI-assisted marketing messages and send them via **WhatsApp** or **SMS**, with full message history tracking and analytics.

## Live Demo: https://unified-inbox-iota.vercel.app

## Features

### Authentication

- Google OAuth using NextAuth
- Secure database-backed sessions (Prisma Adapter)
- Protected dashboard routes

### AI Message Generation

- Gemini AI integration
- Gemini structured output using JSON schema validation
- Ensures consistent headline, body, and CTA format
- Response validated before rendering
- Editable preview before sending

### Multi-Channel Messaging

- WhatsApp via Twilio Sandbox
- SMS via Twilio Programmable Messaging
- Real-time delivery feedback

### Message Persistence

- PostgreSQL (Neon)
- Prisma ORM
- Per-user message isolation
- Stored delivery status and Twilio SID

### Dashboard Analytics

- Total messages sent
- WhatsApp vs SMS breakdown
- Success rate calculation
- Recent activity view

### Modern UI

- Responsive layout
- Collapsible sidebar (hover expand)
- Loading & error states
- Clean dark theme

---

## How It Works

1. User logs in with Google OAuth
2. Enters marketing context
3. Gemini generates structured message (headline, body, CTA)
4. User reviews and edits
5. Message is sent via Twilio (WhatsApp or SMS)
6. Delivery is logged in PostgreSQL
7. Dashboard analytics update in real-time

## Tech Stack

**Frontend**

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

**Backend**

- Next.js API Routes
- Prisma ORM
- PostgreSQL (Neon)

**Authentication**

- NextAuth
- Prisma Adapter

**AI**

- Google Gemini API (structured output)

**Messaging**

- Twilio (WhatsApp & SMS)

---

## 📂 Project Structure

app/  
 api/  
 auth/  
 generate/  
 send/  
 analytics/  
 messages/  
 dashboard/  
 whatsapp/  
 sms/  
 history/  
 signin/

lib/  
 gemini.ts  
 twilio.ts  
 prisma.ts

context/  
 dashboard-context.tsx

---

## Environment Variables

Create a `.env` file.

### Database (Neon)

DATABASE_URL="your_neon_pool_connection_string"
DIRECT_URL="your_neon_direct_connection_string"

---

### NextAuth

NEXTAUTH_SECRET="random_secret"  
NEXTAUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="..."  
GOOGLE_CLIENT_SECRET="..."

---

### Gemini

GEMINI_API_KEY="..."

---

### Twilio

TWILIO_ACCOUNT_SID="..."  
TWILIO_AUTH_TOKEN="..."  
TWILIO_PHONE_NUMBER="+1XXXXXXXXXX"

For WhatsApp Sandbox:

TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"

---

## Getting Started

### 1️. Install dependencies

npm install

---

### 2️. Run Prisma migration

npx prisma migrate dev

---

### 3️. Start development server

npm run dev

App runs on:

http://localhost:3000

---

## Deployment

This project is deployable on **Vercel**.

Steps:

1.  Push to GitHub
2.  Import into Vercel
3.  Add all environment variables
4.  Deploy

Ensure:

- Neon database is accessible
- Twilio credentials are correct
- Gemini API key is valid

Note: Prisma client is generated during build using:
`prisma generate && next build`

---

## Screenshots

### Landing Page

![Landing Page](/screenshots/landing.png)

### AI Message Generation

![AI Message Generation](/screenshots/generating.png)

### SMS Messaging

![SMS Messaging](/screenshots/sms-inbox.png)

### Dashboard

![Dashboard](/screenshots/dashboard.png)

### Message History

![Message History](/screenshots/history.png)

---

## Security Considerations

- All API routes require authenticated session
- Messages scoped by userId (no cross-user data exposure)
- Server-side environment variables only
- Prisma ORM enforces typed queries
- No sensitive credentials committed to repository

---

## WhatsApp Sandbox Notice

WhatsApp functionality uses Twilio Sandbox.  
To receive WhatsApp messages, numbers must join the sandbox by sending the join code to the Twilio sandbox number.

SMS functionality works with verified numbers on Twilio trial accounts.

## Known Limitations

- WhatsApp uses Twilio Sandbox (requires recipient opt-in)
- No broadcast list functionality (single-recipient MVP)
- No Twilio webhook delivery tracking (SID stored only)
- Credentials-based authentication not implemented (OAuth only)