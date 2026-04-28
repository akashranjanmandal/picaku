"use client";
import { useState } from "react";
import { Mic, Zap, FileSearch, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01", icon: <Mic size={17} />, title: "Tap Record",
    desc: "Open Pikaku and hit Record. Works for meetings, phone calls, lectures, and voice notes — on iOS, Android, or desktop. Speaker detection separates voices automatically.",
    accent: "#E1614A",
  },
  {
    num: "02", icon: <Zap size={17} />, title: "AI Transcribes in Seconds",
    desc: "The moment you stop, Pikaku's AI delivers a word-for-word transcript with punctuation, paragraph breaks, and speaker labels. No manual clean-up needed.",
    accent: "#F7AC2C",
  },
  {
    num: "03", icon: <FileSearch size={17} />, title: "Smart Summary & Notes",
    desc: "An AI-generated summary with key points, decisions, and action items is ready instantly. Add your own timestamped text notes right alongside the transcript.",
    accent: "#CA142B",
  },
  {
    num: "04", icon: <MessageCircle size={17} />, title: "Chat with Your Memory",
    desc: "Ask Pikaku anything about your recording. 'What were the action items?' 'What did Sarah say about the deadline?' Precise answers, instantly.",
    accent: "#232323",
  },
];

const transcriptLines = [
  { speaker: "Alex", text: "So the launch is confirmed for October 15th, right?", time: "0:42" },
  { speaker: "Mia", text: "Yes — but we need design sign-off before Thursday or we push to the 22nd.", time: "0:47" },
  { speaker: "Alex", text: "Got it. I'll follow up with the design team today.", time: "0:53" },
  { speaker: "Sam", text: "Backend is ready. Just waiting on the API keys from the client.", time: "1:02" },
];

export default function DailyIntelligence() {
  const [active, setActive] = useState(0);

  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left */}
          <div>
            <Reveal direction="right">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1614A" }}>How It Works</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#222222" }}>
                From recording to{" "}
                <span style={{ color: "#E1614A" }}>insight</span> in minutes
              </h2>
              <p className="text-lg mb-12 leading-relaxed" style={{ color: "#5A5A5A" }}>
                Four steps from pressing Record to having a fully searchable, AI-summarised, chatbot-enabled knowledge base from every conversation.
              </p>
            </Reveal>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <Reveal key={s.num} direction="right" delay={i * 0.08}>
                  <motion.button
                    onClick={() => setActive(i)}
                    className="w-full text-left p-6 sm:p-7 rounded-3xl border transition-all duration-300"
                    style={{
                      background: active === i ? `${s.accent}08` : "#FFFFFF",
                      borderColor: active === i ? `${s.accent}35` : "rgba(0,0,0,0.08)",
                      boxShadow: active === i ? `0 12px 32px ${s.accent}12` : "none",
                    }}
                    whileHover={{ x: 4, borderColor: active === i ? `${s.accent}35` : "rgba(0,0,0,0.14)" }}
                  >
                    <div className="flex items-start gap-5 sm:gap-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{ background: active === i ? s.accent : "#F0F0F0", color: active === i ? "#FFF" : "#9E9E9E", boxShadow: active === i ? `0 8px 16px ${s.accent}30` : "none" }}>
                        {s.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold opacity-30" style={{ color: "#222222" }}>{s.num}</span>
                          <h3 className="font-bold text-[17px]" style={{ color: "#222222" }}>{s.title}</h3>
                        </div>
                        <AnimatePresence initial={false}>
                          {active === i && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="text-[15px] leading-relaxed mt-4 overflow-hidden"
                              style={{ color: "#5A5A5A" }}>
                              {s.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — live transcript mockup */}
          <Reveal direction="left">
            <motion.div
              className="rounded-[2.5rem] overflow-hidden"
              style={{ border: "1px solid rgba(225,97,74,0.18)", boxShadow: "0 24px 80px rgba(225,97,74,0.12)" }}
              whileHover={{ boxShadow: "0 32px 96px rgba(225,97,74,0.18)" }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b" style={{ background: "#F7F7F7", borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full" style={{ background: "#FEE2E2" }}>
                  <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full" style={{ background: "#E1614A" }} />
                  <span className="text-[13px] font-bold" style={{ color: "#E1614A" }}>Recording · 1:02</span>
                </div>
                <span className="text-[13px] font-bold" style={{ color: "#9E9E9E" }}>Product Sync</span>
              </div>

              {/* Tabs */}
              <div className="flex gap-3 px-8 pt-6 pb-2">
                {["Transcript", "Chats", "Summary"].map((t, i) => (
                  <span key={t} className="text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
                    style={{
                      background: i === 0 ? "#FFFFFF" : "transparent",
                      border: i === 0 ? "1.5px solid #E1614A" : "1.5px solid #E0E0E0",
                      color: i === 0 ? "#E1614A" : "#9E9E9E",
                      boxShadow: i === 0 ? "0 4px 12px rgba(225,97,74,0.15)" : "none",
                    }}
                    onMouseEnter={(e) => { if (i !== 0) { (e.currentTarget as HTMLElement).style.borderColor = "#E1614A"; (e.currentTarget as HTMLElement).style.color = "#E1614A"; } }}
                    onMouseLeave={(e) => { if (i !== 0) { (e.currentTarget as HTMLElement).style.borderColor = "#E0E0E0"; (e.currentTarget as HTMLElement).style.color = "#9E9E9E"; } }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Transcript */}
              <div className="p-8 space-y-4 bg-white min-h-[300px]">
                {transcriptLines.map((line, i) => (
                  <motion.div key={line.time}
                    initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.09 }}
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 group"
                    style={{ background: i === transcriptLines.length - 1 ? "rgba(225,97,74,0.06)" : "transparent", border: `1px solid ${i === transcriptLines.length - 1 ? "rgba(225,97,74,0.18)" : "transparent"}` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(225,97,74,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,97,74,0.18)"; }}
                    onMouseLeave={(e) => { if (i !== transcriptLines.length - 1) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; } }}
                  >
                    <span className="text-[11px] font-bold px-3 py-1 rounded-lg flex-shrink-0 mt-1"
                      style={{ background: "#F0F0F0", color: "#5A5A5A" }}>{line.speaker}</span>
                    <p className="text-[15px] flex-1 leading-relaxed" style={{ color: "#222222" }}>{line.text}</p>
                    <span className="text-[11px] flex-shrink-0 font-medium" style={{ color: "#C0C0C0" }}>{line.time}</span>
                  </motion.div>
                ))}

                {/* Action items callout */}
                <div className="rounded-[1.5rem] p-6 mt-4 relative overflow-hidden"
                  style={{ background: "rgba(225,97,74,0.06)", border: "1px solid rgba(225,97,74,0.18)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} style={{ color: "#E1614A" }} />
                    <p className="text-[13px] font-bold" style={{ color: "#E1614A" }}>AI Intelligence Detected</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[14px] font-medium" style={{ color: "#5A5A5A" }}>· Design sign-off — <span className="font-bold text-[#222222]">Alex</span> · Due Thursday</p>
                    <p className="text-[14px] font-medium" style={{ color: "#5A5A5A" }}>· API keys from client — <span className="font-bold text-[#222222]">Sam</span> · Pending</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-[2rem] px-6 py-4 hidden lg:flex items-center gap-3"
              style={{ border: "1px solid rgba(225,97,74,0.2)", boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}>
              <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">⚡</div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: "#222222" }}>Instant Analysis</p>
                <p className="text-[11px] font-medium" style={{ color: "#9E9E9E" }}>ready in seconds</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
