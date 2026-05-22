import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const SYSTEM_INSTRUCTION = `Your name is Gabe. You are a professional AI assistant for Ridings Landscaping & Excavation LLC. 
Your communication style is direct, brief, and professional. 
Provide answers that are concise and to the point. Do not use filler or excessive pleasantries.
Your goal is to answer questions about their services: Land Clearing/ Excavation, Landscaping, Hardscaping (including Flagstone patios, Patios, Paver patios, Pavers, and Retaining walls), and Construction and remodel (such as additions, remodels, decks, porches, screened-in areas, and custom pools).
The company is located in Maryville, TN, and serves the Knoxville, Maryville, Walland, Townsend, and Monroe County areas.
They have over 26 years of experience and have completed 2,500+ projects.

Key Directives:
1. Be extremely brief and direct in all responses.
2. For quotes/estimates, provide this request link directly: https://clienthub.getjobber.com/hubs/0b06c4b8-21ee-4ceb-97a0-d1f4a6c93426/public/requests/2398467/new
3. If unsure, refer them to Ridings Landscaping & Excavation LLC at (865) 390-4963 or cridings05@gmail.com.`;

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        // We could pass history here, but for simplicity we'll just handle it in memory
        // and send the current context if needed.
        // For a more robust app, you'd pass the full message history.
      });

      // Sending only the last message for simplicity in this implementation, 
      // but Gemini sessions handle context automatically if we use sendMessage.
      const response = await chat.sendMessage({ 
        message: userMessage 
      });

      const aiText = response.text || "I'm sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'model', content: aiText }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-brand-orange/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-black p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-brand-black" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-black italic uppercase">GABE</h3>
                  <p className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-orange transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-silver/10"
            >
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-brand-silver/20 rounded-full flex items-center justify-center mx-auto text-brand-metal">
                    <MessageSquare size={24} />
                  </div>
                  <p className="text-xs text-brand-metal italic font-medium px-6">
                    "How can I help you with your project at Ridings Landscaping & Excavation LLC?"
                  </p>
                </div>
              )}
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${m.role === 'user' ? 'bg-brand-orange text-brand-black' : 'bg-brand-black text-white'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-brand-orange text-brand-black rounded-tr-none' : 'bg-white shadow-sm border border-brand-silver/30 rounded-tl-none text-brand-black'}`}>
                      <div className="prose prose-sm prose-orange">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-brand-black text-white flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="p-3 rounded-2xl bg-white shadow-sm border border-brand-silver/30 rounded-tl-none flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-brand-orange" />
                      <span className="text-xs italic text-brand-metal">Calculating grades...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-brand-silver/30 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-brand-silver/20 border-0 p-3 pr-12 rounded-xl text-sm focus:ring-2 ring-brand-orange outline-none"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-black text-white rounded-lg hover:bg-brand-orange hover:text-brand-black transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shadow-2xl border-2 border-brand-orange relative group"
        id="ai-chat-toggle"
      >
        <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-20 rounded-full transition-opacity"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {/* Pulsing notification dot */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red rounded-full border-2 border-brand-black animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
}
