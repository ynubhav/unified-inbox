import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

// 1️⃣ Define strict schema
const marketingSchema = z.object({
  headline: z.string().describe("Short catchy headline"),
  message: z.string().describe("Concise marketing message under 60 words"),
  cta: z.string().describe("Clear call-to-action phrase"),
});

// 2️⃣ Create AI client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

// 3️⃣ Generate structured marketing message
export async function generateMarketingMessage(context: string) {
  try {
    const prompt = `
Generate ONE marketing message for the following context.

Rules:
- Keep message under 60 words
- Professional tone unless specified
- Output must strictly follow the JSON schema

Context:
${context}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // use latest available for your key
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(marketingSchema),
      },
    });

    // Extract text
    const responseText = response.text;

    if (!responseText) {
      throw new Error("Empty response from Gemini");
    }

    // Parse JSON
    const parsed = marketingSchema.parse(JSON.parse(responseText));

    return parsed;
  } catch (error) {
    console.error("Gemini structured generation error:", error);
    throw new Error("Failed to generate structured marketing message");
  }
}