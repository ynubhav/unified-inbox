
# Unified Inbox

AI-powered multi-channel messaging platform built with **Next.js, Prisma, Neon, Gemini, and Twilio**.

This project allows users to generate AI-assisted marketing messages and send them via **WhatsApp** or **SMS**, with full message history tracking and analytics.

----------

## Features

### Authentication

-   Google OAuth using NextAuth
    
-   Secure database-backed sessions (Prisma Adapter)
    
-   Protected dashboard routes
    

### AI Message Generation

-   Gemini AI integration
    
-   Structured JSON output (headline, body, CTA)
    
-   Editable preview before sending
    

###  Multi-Channel Messaging

-   WhatsApp via Twilio Sandbox
    
-   SMS via Twilio Programmable Messaging
    
-   Real-time delivery feedback
    

### Message Persistence

-   PostgreSQL (Neon)
    
-   Prisma ORM
    
-   Per-user message isolation
    
-   Stored delivery status and Twilio SID
    

### Dashboard Analytics

-   Total messages sent
    
-   WhatsApp vs SMS breakdown
    
-   Success rate calculation
    
-   Recent activity view
    

### Modern UI

-   Responsive layout
    
-   Collapsible sidebar (hover expand)
    
-   Loading & error states
    
-   Clean dark theme
    

----------

## Tech Stack

**Frontend**

-   Next.js 14 (App Router)
    
-   TypeScript
    
-   Tailwind CSS
    

**Backend**

-   Next.js API Routes
    
-   Prisma ORM
    
-   PostgreSQL (Neon)
    

**Authentication**

-   NextAuth
    
-   Prisma Adapter
    

**AI**

-   Google Gemini API (structured output)
    

**Messaging**

-   Twilio (WhatsApp & SMS)
    

----------

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

----------

## ⚙️ Environment Variables

Create a `.env` and `.env.local` file.

### Database (Neon)

DATABASE_URL="your_neon_connection_string"

----------

### NextAuth

NEXTAUTH_SECRET="random_secret"  
NEXTAUTH_URL="http://localhost:3000"  
  
GOOGLE_CLIENT_ID="..."  
GOOGLE_CLIENT_SECRET="..."

----------

### Gemini

GEMINI_API_KEY="..."

----------

### Twilio

TWILIO_ACCOUNT_SID="..."  
TWILIO_AUTH_TOKEN="..."  
TWILIO_PHONE_NUMBER="+1XXXXXXXXXX"

For WhatsApp Sandbox:

TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"

----------

## 🚀 Getting Started

### 1️⃣ Install dependencies

npm install

----------

### 2️⃣ Run Prisma migration

npx prisma migrate dev

----------

### 3️⃣ Start development server

npm run dev

App runs on:

http://localhost:3000

----------

## 📦 Deployment

This project is deployable on **Vercel**.

Steps:

1.  Push to GitHub
    
2.  Import into Vercel
    
3.  Add all environment variables
    
4.  Deploy
    

Ensure:

-   Neon database is accessible
    
-   Twilio credentials are correct
    
-   Gemini API key is valid
    

----------

## Security Considerations

-   All API routes are session-protected
    
-   User data is scoped by `userId`
    
-   No sensitive keys exposed to frontend
    
-   Prisma prevents SQL injection
    
-   Twilio secrets stored in environment variables
    

----------

## 📸 Screenshots

(Add screenshots here before submission.)

Recommended:

-   Landing page
    
-   AI message generation
    
-   WhatsApp send
    
-   SMS send
    
-   Dashboard analytics
    
-   History page