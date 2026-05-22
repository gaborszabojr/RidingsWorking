import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const SYSTEM_INSTRUCTION = `Your name is Caleb. You are a professional AI assistant for Ridings Landscaping & Excavation LLC. 
Your communication style is direct, brief, helpful, and professional. 
Provide answers that are concise, accurate, and highly polite. Do not use filler or excessive corporate fluff, but be highly supportive as a super helper.
Your goal is to answer questions about our services: Land Clearing/ Excavation, Landscaping, Hardscaping (including Flagstone patios, Patios, Paver patios, Pavers, and Retaining walls), and Construction and remodel (such as additions, remodels, decks, porches, screened-in areas, and custom pools).
The company is located in Maryville, TN, and serves the Knoxville, Maryville, Walland, Townsend, and Monroe County areas.
They have over 26 years of experience and have completed 2,500+ projects.
Our official website is ridingslandscaping.com.

Key Directives:
1. Be extremely brief, helpful, and direct in all responses.
2. For quotes/estimates, provide this request link directly: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new
3. If unsure, refer them to Ridings Landscaping & Excavation LLC at (865) 390-4963 or cridings05@gmail.com.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Instantiate server-side Gemini client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Client Chat API Endpoint proxy
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages array" });
      }

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
      console.error("Gemini API server-side error:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
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
