import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, X, MessageSquare, Bot, User } from "lucide-react";
import { cvData } from "../data/cvData";

// System prompt containing Hanif's complete CV context
const SYSTEM_INSTRUCTION = `You are Hanif's Virtual Recruiter Assistant, a professional and friendly AI representative for Hanif Arif. 
Your goal is to answer questions from recruiters, hiring managers, and clients about Hanif's skills, professional experience, projects, and availability based on his CV.

Here is Hanif's background:
- Name: Hanif Arif
- Title: Backend Engineer & Full-Stack Developer
- Location: Mojokerto, Indonesia (with experience working for Jakarta-based firms)
- Email: hnfarif18@gmail.com
- GitHub: ${cvData.personal.github}
- LinkedIn: ${cvData.personal.linkedin}
- Bio: Backend Engineer with 3 years of experience delivering enterprise-scale financial systems, transaction systems, and integrations in banking sectors.
- Experience:
  1. PT Bank Negara Indonesia (Persero) Tbk (BNI) - Backend Engineer (Jul 2024 - Aug 2026). Worked on wholesale transaction systems, Kafka event loops, Spring Boot microservices, OpenShift container orchestration, GitLab CI/CD pipelines, and SonarQube code reviews.
  2. PT Pegadaian Galeri Dua Empat - Full-Stack Developer (Jan 2024 - Apr 2024). Worked on internal gold transaction systems, Java, Vaadin framework, MySQL.
  3. Metrodata Academy - Fullstack Developer Bootcamp (Sep 2023 - Dec 2023).
  4. Investree x Rakamin Academy - Fullstack Developer Intern (May 2023 - Jun 2023).
- Major Projects:
  1. Managed File Transfer (MFT) Portal: React.js portal configuration interface and webMethods CRUD APIs with Oracle DB.
  2. SNAP VA Payment & Refund: Spring Boot Virtual Account payment and refund microservices deployed on OpenShift.
  3. Cost Control System: NestJS and React.js budget tracking modules with PostgreSQL.
  4. Loan Management System: Middleware orchestration using webMethods Software AG, Oracle, and SQL Server.
  5. SPAN Revamp: Microservices revamp using Spring Boot, Spring Batch, and Apache Kafka for Ministry of Finance statement reports.
  6. EMAS: Internal gold mutation system using Java and Vaadin framework.
  7. OBE Application: Undergraduate thesis project using Laravel.
- Technical Stack: Java, JavaScript, TypeScript, Spring Boot, Spring Batch, NestJS, React.js, Vaadin, Laravel, Docker, OpenShift, Kubernetes, Kafka, Redis, Oracle DB, PostgreSQL, MySQL.

Rules:
1. Always be polite, professional, and confident.
2. Keep your answers concise, recruiter-focused, and under 3-4 sentences when possible.
3. If asked about something not in the CV, answer professionally, state that you will notify Hanif, and point them to his email (hnfarif18@gmail.com) or the contact form.
4. You can speak English and Indonesian, matching the language of the inquirer.`;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hello! I am Hanif's AI recruiter assistant. Ask me anything about Hanif's experience at BNI, his technical skills, or his projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const suggestions = [
    "What is Hanif's core stack?",
    "Tell me about his BNI projects",
    "Is he available for remote roles?",
  ];

  const handleSend = async (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    if (!textToSend) setInput("");

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      if (apiKey) {
        // Filter out the initial welcome greeting from the history sent to Gemini,
        // as the API requires the first turn of a chat session to be from the 'user' role.
        const historyToSend = newMessages.filter(
          (msg, idx) => !(idx === 0 && msg.role === "model"),
        );

        // Prepend the system instructions to the first user message to prime the model context.
        // This is 100% compatible with all Gemini versions (v1 and v1beta) and avoids schema parameter differences.
        const formattedHistory = historyToSend.map((msg, idx) => {
          let messageText = msg.text;
          if (idx === 0) {
            messageText = `${SYSTEM_INSTRUCTION}\n\n---\n\nRecruiter query to answer: "${msg.text}"`;
          }
          return {
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: messageText }],
          };
        });

        const modelsToTry = [
          "gemini-flash-latest",
          // 'gemini-1.5-flash-latest',
          // 'gemini-pro',
          // 'gemini-1.5-pro'
        ];

        let response;
        let success = false;
        let lastError = null;

        for (const model of modelsToTry) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
            response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": import.meta.env.VITE_GEMINI_API_KEY,
              },
              body: JSON.stringify({
                contents: formattedHistory,
              }),
            });

            if (response.status === 404) {
              console.warn(
                `Model ${model} returned 404, trying next fallback model...`,
              );
              continue;
            }

            if (!response.ok) {
              const errData = await response.json().catch(() => ({}));
              console.error(`Gemini API Error for ${model}:`, errData);
              lastError =
                errData.error?.message || `API call error for ${model}`;
              continue;
            }

            success = true;
            break;
          } catch (err) {
            console.error(`Fetch error for ${model}:`, err);
            lastError = err.message;
          }
        }

        if (!success) {
          throw new Error(lastError || "All models failed to load");
        }

        const data = await response.json();
        const reply =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I apologize, I could not generate a response.";

        setMessages((prev) => [...prev, { role: "model", text: reply }]);
      } else {
        // Mode Demo / Fallback
        setTimeout(() => {
          let reply = "";
          const query = text.toLowerCase();

          if (
            query.includes("stack") ||
            query.includes("bahasa") ||
            query.includes("skills") ||
            query.includes("teknologi")
          ) {
            reply =
              "Hanif's core engineering stack consists of Java (Spring Boot, Spring Batch), NestJS, React.js, webMethods integration tools, Apache Kafka, and PostgreSQL/Oracle databases. He is highly proficient in building financial systems.";
          } else if (
            query.includes("project") ||
            query.includes("proyek") ||
            query.includes("portofolio") ||
            query.includes("mft") ||
            query.includes("snap")
          ) {
            reply =
              "Hanif has completed key projects including BNI's Managed File Transfer (MFT) Portal, the SNAP Virtual Account payment system, and the Ministry of Finance Treasury SPAN Revamp. You can check the details inside the Project Showcase section!";
          } else if (
            query.includes("remote") ||
            query.includes("availability") ||
            query.includes("kerja") ||
            query.includes("lowongan")
          ) {
            reply =
              "Hanif is open to new career opportunities, including remote roles and hybrid/on-site backend engineer positions. You can contact him directly at hnfarif18@gmail.com to discuss further!";
          } else {
            reply = `(Demo Mode) Thank you for your question: "${text}". To activate live AI responses, configure the 'VITE_GEMINI_API_KEY' variable inside the project's .env file. Feel free to contact Hanif at hnfarif18@gmail.com!`;
          }

          setMessages((prev) => [...prev, { role: "model", text: reply }]);
        }, 800);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I encountered a communication error with the AI API. Please try again or reach out to Hanif directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-panel w-[320px] sm:w-95 h-120 sm:h-130 rounded-3xl overflow-hidden flex flex-col shadow-[0_10px_50px_rgba(124,58,237,0.25)] border border-black/5 dark:border-white/10 mb-4"
          >
            {/* Header */}
            <div className="p-4 bg-white/80 dark:bg-slate-950/60 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-none">
                    Hanif's AI Agent
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                      {apiKey ? "API Live" : "Demo Mode"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Messages */}
            <div className="grow overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar bg-gray-50/50 dark:bg-slate-950/20">
              {messages.map((msg, index) => {
                const isModel = msg.role === "model";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 max-w-[85%] ${isModel ? "self-start" : "self-end flex-row-reverse"}`}
                  >
                    <div
                      className={`p-2 rounded-full border text-xs shrink-0 ${
                        isModel
                          ? "bg-violet-600/10 border-violet-500/20 text-violet-600 dark:text-violet-400"
                          : "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {isModel ? (
                        <Bot className="w-3.5 h-3.5" />
                      ) : (
                        <User className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed font-light ${
                        isModel
                          ? "bg-white dark:bg-slate-900/60 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-200 rounded-tl-none shadow-sm"
                          : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-tr-none shadow-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-start gap-2.5 self-start max-w-[85%]">
                  <div className="p-2 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white dark:bg-slate-900/60 border border-black/5 dark:border-white/5 text-gray-400 p-3 rounded-2xl rounded-tl-none text-xs flex gap-1.5 items-center shadow-sm">
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-black/5 dark:border-white/5 flex flex-col gap-1.5 bg-white/50 dark:bg-transparent">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Suggested Questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {suggestions.map((text, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(text)}
                      className="text-left px-3 py-2 text-[11px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 rounded-xl transition-all duration-200 leading-snug"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-black/5 dark:border-white/5 bg-white/80 dark:bg-slate-950/40 flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask something about Hanif..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="grow bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 focus:border-violet-500/40 focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 disabled:opacity-50 transition-colors duration-200"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:opacity-50 text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-linear-to-r from-violet-600 to-indigo-600 text-white flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 relative group overflow-hidden border border-violet-500/20"
        title="Ask AI Agent"
        aria-label="Open AI Recruiter Assistant"
      >
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
