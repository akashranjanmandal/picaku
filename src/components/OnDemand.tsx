"use client";
import { useState } from "react";
import { Sparkles, Send, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { q: "What were the action items?",        icon: "✅" },
  { q: "Summarise my last 3 meetings",       icon: "📋" },
  { q: "What did we decide about the launch?", icon: "🚀" },
  { q: "What should I follow up on?",        icon: "🔔" },
  { q: "Find notes about API keys",          icon: "🔑" },
];

const answers: Record<string, { text: string; tag: string }> = {
  "What were the action items?": {
    text: "Two action items found:\n· Follow up with design team — due Thursday (Alex)\n· Collect API keys from client — pending (Sam)",
    tag: "From: Team Standup · Oct 3",
  },
  "Summarise my last 3 meetings": {
    text: "Team Standup (Dec 1): Sprint 12 planning, 2 blockers.\nClient Call (Nov 29): Acme Corp onboarding, go-live Jan 10.\nML Lecture (Nov 28): Gradient descent & backprop.",
    tag: "3 recordings analysed",
  },
  "What did we decide about the launch?": {
    text: "Launch confirmed for Oct 15, pending design sign-off by Thursday. Fallback date is Oct 22 if sign-off is missed.",
    tag: "From: Product Sync · 0:47",
  },
  "What should I follow up on?": {
    text: "Three things to follow up:\n· Design approval — Thursday deadline\n· Client API keys (Sam)\n· Confirm launch date once both resolved",
    tag: "Across 2 recordings",
  },
  "Find notes about API keys": {
    text: "Found in 'Client Call — Oct 3': Sam is responsible for collecting API keys from the client. Status: pending. Mentioned at 1:02.",
    tag: "Memory match · 98% confidence",
  },
};

export default function OnDemand() {
  const [selected, setSelected] = useState(questions[0].q);
  const answer = answers[selected];

  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10 bg-white" id="use-cases">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left */}
          <div>
            <Reveal direction="right">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13px] font-bold mb-6"
                style={{ background: "rgba(225,97,74,0.09)", color: "#E1614A", border: "1px solid rgba(225,97,74,0.22)" }}>
                <MessageCircle size={14} />
                Insights from Memories
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#222222" }}>
                Chat with your entire{" "}
                <span style={{ color: "#E1614A" }}>memory</span>
              </h2>
              <p className="text-lg mb-12 leading-relaxed" style={{ color: "#5A5A5A" }}>
                Ask Pikaku anything — across all your recordings, notes, and links. It finds the answer instantly, no matter when or where you captured it.
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9E9E9E" }}>Try asking:</p>
              <div className="space-y-3">
                {questions.map((item, i) => (
                  <motion.button
                    key={item.q}
                    onClick={() => setSelected(item.q)}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left text-[15px] font-bold px-6 py-4 rounded-2xl border transition-all duration-300"
                    style={{
                      background: selected === item.q ? "rgba(225,97,74,0.08)" : "#FAFAFA",
                      color: selected === item.q ? "#E1614A" : "#5A5A5A",
                      borderColor: selected === item.q ? "rgba(225,97,74,0.35)" : "rgba(0,0,0,0.08)",
                      boxShadow: selected === item.q ? `0 8px 24px rgba(225,97,74,0.08)` : "none",
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.q}
                  </motion.button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — preview panel */}
          <Reveal direction="left">
            <motion.div
              className="rounded-[2.5rem] overflow-hidden relative"
              style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#FFFFFF", boxShadow: "0 24px 80px rgba(0,0,0,0.06)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b"
                style={{ background: "#FDFDFD", borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Chat body */}
              <div className="p-8 space-y-6 bg-white min-h-[320px] text-left">
                {/* User bubble */}
                <motion.div key={selected + "u"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }} className="flex justify-end">
                  <div className="max-w-[85%] px-6 py-3.5 rounded-2xl rounded-tr-sm text-[15px] font-bold text-white shadow-lg"
                    style={{ background: "#E1614A", boxShadow: "0 8px 24px rgba(225,97,74,0.2)" }}>
                    {selected}
                  </div>
                </motion.div>

                {/* AI reply */}
                <AnimatePresence mode="wait">
                  <motion.div key={selected + "a"} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }} transition={{ delay: 0.2, duration: 0.35 }}
                    className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1 shadow-sm"
                      style={{ background: "linear-gradient(135deg,#E1614A,#F7AC2C)" }}>P</div>
                    <div className="flex-1">
                      <div className="px-6 py-5 rounded-2xl rounded-tl-sm bg-white"
                        style={{ border: "1px solid rgba(225,97,74,0.18)", color: "#222222" }}>
                        {answer.text.split("\n").map((line, i) => (
                          <p key={i} className={`text-[15px] leading-relaxed${i > 0 ? " mt-2" : ""}`}>{line}</p>
                        ))}
                      </div>
                      <p className="text-[11px] font-bold mt-2.5 ml-1 uppercase tracking-wider" style={{ color: "#9E9E9E" }}>{answer.tag}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Input bar */}
              <div className="px-8 pb-8">
                <div className="flex items-center gap-4 rounded-2xl px-5 py-4 border"
                  style={{ background: "#FAFAFA", borderColor: "rgba(225,97,74,0.22)" }}>
                  <span className="flex-1 text-[15px] font-medium" style={{ color: "#C0C0C0" }}>Ask about your memories…</span>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer shadow-md"
                    style={{ background: "#E1614A" }}>
                    <Send size={16} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-[2rem] px-6 py-4 hidden lg:flex items-center gap-3"
              style={{ border: "1px solid rgba(225,97,74,0.2)", boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}>
              <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">🧠</div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: "#222222" }}>Unified Memory Vault</p>
                <p className="text-[11px] font-medium" style={{ color: "#9E9E9E" }}>recordings · notes · links</p>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
