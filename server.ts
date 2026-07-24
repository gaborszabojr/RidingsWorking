import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const SYSTEM_INSTRUCTION = `Your name is Caleb, a helpful employee at Ridings Landscaping & Excavation.
Directives:
1. Be concise, direct, and helpful. Answer only what is asked. Keep responses to 1-2 sentences max.
2. If asked for a quote/booking, provide ONLY the link: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new
3. Use provided context (name, project) to be personal.
4. Our services: Excavation, Landscaping, Hardscaping, Construction (Decks, Pools, etc.).
5. Contact: (865) 390-4963 or cridings05@gmail.com.
6. Serve Maryville, Knoxville, Walland, Townsend, Monroe County.`;

function generateCalebFallback(userMessages: any[]): string {
  const fullConversation = userMessages.map((m: any) => m.content || "").join(" ").toLowerCase();
  const lastUserMsg = (userMessages.filter((m: any) => m.role === "user").pop()?.content || "").toLowerCase();

  // Look for name introductions like "I'm John", "My name is Sarah", "Name is Dave"
  const nameMatch = fullConversation.match(/(?:my name is|i'm|i am|this is)\s+([a-zA-Z]+)/i);
  const userName = nameMatch ? nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1) : "";

  const greeting = userName 
    ? `Hi ${userName}, Caleb here!` 
    : "Hi! Caleb here from Ridings Landscaping & Excavation.";

  if (lastUserMsg.includes("quote") || lastUserMsg.includes("estimate") || lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("book") || lastUserMsg.includes("schedule")) {
    return `${greeting} You can request a free estimate directly here: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new`;
  }

  if (lastUserMsg.includes("contact") || lastUserMsg.includes("phone") || lastUserMsg.includes("email") || lastUserMsg.includes("call") || lastUserMsg.includes("reach") || lastUserMsg.includes("number")) {
    return `${greeting} You can reach us at (865) 390-4963 or cridings05@gmail.com.`;
  }

  if (lastUserMsg.includes("service") || lastUserMsg.includes("do you") || lastUserMsg.includes("excavat") || lastUserMsg.includes("landscap") || lastUserMsg.includes("patio") || lastUserMsg.includes("pool") || lastUserMsg.includes("wall") || lastUserMsg.includes("deck")) {
    return `${greeting} Yes, we offer excavation, landscaping, hardscaping, and construction services. What project do you have in mind?`;
  }

  return `${greeting} How can I help you today?`;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Client Chat API Endpoint proxy
  app.post("/api/chat", async (req, res) => {
    let userMessages: any[] = [];
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages array" });
      }
      userMessages = messages;

      const apiKey = process.env.GEMINI_API_KEY?.trim();
      if (!apiKey || apiKey === "") {
        const fallbackAnswer = generateCalebFallback(userMessages);
        return res.json({
          text: `${fallbackAnswer}\n\n*(Note for site admin: GEMINI_API_KEY is not set in environment settings)*`
        });
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
        parts: [{ text: m.content }]
      }));

      // Generate response using gemini-3.5-flash on the server
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

      const isQuotaOrCredit = 
        errorStatus === 429 ||
        errorMessage.includes("429") ||
        errorMessage.includes("prepayment credits") ||
        errorMessage.includes("depleted") ||
        errorMessage.includes("resource_exhausted") ||
        errorMessage.includes("quota");

      const isAuthOrKey =
        errorStatus === 401 ||
        errorStatus === 400 ||
        errorMessage.includes("401") ||
        errorMessage.includes("unauthenticated") ||
        errorMessage.includes("api_key_invalid") ||
        errorMessage.includes("api key expired") ||
        errorMessage.includes("access_token") ||
        errorMessage.includes("authentication credential") ||
        errorMessage.includes("invalid_argument");

      if (isQuotaOrCredit) {
        return res.json({
          text: `${fallbackAnswer}\n\n*(Note for site admin: Gemini API prepayment credits are depleted. You can manage project credits at https://ai.studio/projects)*`
        });
      }

      if (isAuthOrKey) {
        return res.json({
          text: `${fallbackAnswer}\n\n*(Note for site admin: Gemini API key is missing, invalid, or expired. Update GEMINI_API_KEY in platform Settings)*`
        });
      }

      // Default fallback message for other server-side errors
      return res.json({
        text: fallbackAnswer
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
