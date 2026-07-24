import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const SYSTEM_INSTRUCTION = `Your name is Caleb, a friendly, helpful employee at Ridings Landscaping & Excavation.
Directives:
1. Be conversational, human-like, and concise. Keep answers brief (1-2 sentences). Avoid corporate filler.
2. Before asking any question, STRICTLY review the chat history to ensure you have not already asked it or received the answer.
3. Proactively ask only the NEXT missing detail needed for a booking (e.g., if you know the service, ask for the general location or project scope). NEVER repeat questions.
4. If they need a quote/book, politely explain that the best way is our online form and provide the link: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new
5. Services: Excavation, Landscaping, Hardscaping, Construction.
6. Contact: (865) 390-4963 or cridings05@gmail.com.
7. Area: Maryville, Knoxville, Walland, Townsend, Monroe County.
8. Use the user's name if provided.`;

function generateCalebFallback(userMessages: any[]): string {
  const fullConversation = userMessages.map((m: any) => m.content || "").join(" ").toLowerCase();
  const lastUserMsg = (userMessages.filter((m: any) => m.role === "user").pop()?.content || "").toLowerCase();
  const hasGreeted = userMessages.some((m: any) => m.role === "model");

  // Look for name introductions like "I'm John", "My name is Sarah", "Name is Dave"
  const nameMatch = fullConversation.match(/(?:my name is|i'm|i am|this is)\s+([a-zA-Z]+)/i);
  const userName = nameMatch ? nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1) : "";

  const greeting = hasGreeted 
    ? ""
    : (userName ? `Hi ${userName}, Caleb here! ` : "Hi! Caleb here from Ridings Landscaping & Excavation. ");

  if (lastUserMsg.includes("quote") || lastUserMsg.includes("estimate") || lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("book") || lastUserMsg.includes("schedule")) {
    return `${greeting}You can request a free estimate directly here: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new`;
  }

  if (lastUserMsg.includes("contact") || lastUserMsg.includes("phone") || lastUserMsg.includes("email") || lastUserMsg.includes("call") || lastUserMsg.includes("reach") || lastUserMsg.includes("number")) {
    return `${greeting}You can reach us at (865) 390-4963 or cridings05@gmail.com.`;
  }

  if (lastUserMsg.includes("service") || lastUserMsg.includes("do you") || lastUserMsg.includes("excavat") || lastUserMsg.includes("landscap") || lastUserMsg.includes("patio") || lastUserMsg.includes("pool") || lastUserMsg.includes("wall") || lastUserMsg.includes("deck")) {
    return `${greeting}Yes, we offer excavation, landscaping, hardscaping, and construction services. What project do you have in mind?`;
  }

  return `${greeting}How can I help you today?`;
}

export default async function handler(req: any, res: any) {
  let userMessages: any[] = [];
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    userMessages = messages;

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey || apiKey === "") {
      const fallbackAnswer = generateCalebFallback(userMessages);
      return res.json({ text: fallbackAnswer });
    }

    // Instantiate server-side Gemini client with active API key
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    // Convert messages to Gemini Content schema format
    const contents = messages.map((m: any) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Generate response
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    const errorStr = typeof error === 'object' ? JSON.stringify(error) : String(error);
    const errorMessage = (error?.message || errorStr || "").toLowerCase();
    const errorStatus = error?.status || error?.code;

    console.warn("Gemini API notice:", error?.message || errorStr);

    const fallbackAnswer = generateCalebFallback(userMessages);

    return res.json({ text: fallbackAnswer });
  }
}
