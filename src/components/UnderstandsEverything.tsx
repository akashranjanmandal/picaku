"use client";
import { useState, type ReactNode } from "react";
import { Link2, Star, FileText, Users, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

type CardKey = "link" | "highlight" | "notes" | "speakers";

const cards: { key: CardKey; icon: ReactNode; title: string; sub: string; accent: string; desc: string; preview: ReactNode }[] = [
  {
    key: "link",
    icon: <Link2 size={18} />,
    title: "Discuss Any Link",
    sub: "Articles · Videos · Papers",
    accent: "#E1614A",
    desc: "Paste any URL and Pikaku reads the full content. Ask questions, get summaries, and extract key insights from any article, YouTube video, or research paper.",
    preview: (
      <div className="rounded-xl p-4 space-y-2.5" style={{ background: "#F7F7F7" }}>
        <div className="flex items-center gap-2 p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(225,97,74,0.15)" }}>
          <Link2 size={12} style={{ color: "#E1614A" }} />
          <span className="text-xs font-bold truncate" style={{ color: "#5A5A5A" }}>youtube.com/watch?v=abc123</span>
        </div>
        <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
          <p className="text-xs font-bold mb-1" style={{ color: "#E1614A" }}>✨ AI Summary</p>
          <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>This video covers the key principles of machine learning — from supervised learning to neural networks.</p>
        </div>
      </div>
    ),
  },
  {
    key: "highlight",
    icon: <Star size={18} />,
    title: "Memory Highlights",
    sub: "Saved · Searchable · Forever",
    accent: "#F7AC2C",
    desc: "Tap any line in a transcript to save it as a Memory Highlight. Your best insights are pinned, searchable, and ready to reference across any future conversation.",
    preview: (
      <div className="rounded-xl p-4 space-y-2" style={{ background: "#F7F7F7" }}>
        {[
          { text: "Launch confirmed for Oct 15 — pending design sign-off.", time: "0:42" },
          { text: "API keys still waiting on the client.", time: "1:02" },
        ].map((h) => (
          <div key={h.time} className="flex items-start gap-3 p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(247,172,44,0.25)" }}>
            <Star size={11} style={{ color: "#F7AC2C", fill: "#F7AC2C" }} className="mt-0.5 flex-shrink-0" />
            <p className="text-xs flex-1 leading-relaxed" style={{ color: "#222222" }}>{h.text}</p>
            <span className="text-xs flex-shrink-0" style={{ color: "#C0C0C0" }}>{h.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "notes",
    icon: <FileText size={18} />,
    title: "Text Notes",
    sub: "Type · Paste · Save",
    accent: "#CA142B",
    desc: "Write freeform notes or paste any text directly. Everything lands in your Memory Vault — auto-tagged, timestamped, and fully searchable with AI chat.",
    preview: (
      <div className="rounded-xl p-4" style={{ background: "#F7F7F7" }}>
        <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(202,20,43,0.15)" }}>
          <p className="text-xs leading-relaxed italic" style={{ color: "#5A5A5A" }}>
            &quot;Launch date moved to Oct 15 — confirm with design team before Thursday. Sam handling API keys from client side.&quot;
          </p>
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-xs" style={{ color: "#9E9E9E" }}>Oct 3, 2025 · 2:14 PM</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(202,20,43,0.09)", color: "#CA142B" }}>Saved</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "speakers",
    icon: <Users size={18} />,
    title: "Speaker Recognition",
    sub: "Auto-detect · Label · Separate",
    accent: "#232323",
    desc: "Pikaku automatically detects and separates speakers in every recording. Each voice gets its own label so you always know who said what, no manual tagging needed.",
    preview: (
      <div className="rounded-xl p-4 space-y-2" style={{ background: "#F7F7F7" }}>
        {[
          { speaker: "Alex", text: "Launch confirmed for October 15th.", color: "#E1614A" },
          { speaker: "Mia",  text: "We need design sign-off before Thursday.", color: "#F7AC2C" },
          { speaker: "Sam",  text: "Backend is ready — waiting on API keys.", color: "#CA142B" },
        ].map((l) => (
          <div key={l.speaker} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0"
              style={{ background: `${l.color}14`, color: l.color }}>{l.speaker}</span>
            <p className="text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>{l.text}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function UnderstandsEverything() {
  const [open, setOpen] = useState<CardKey>("link");

  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10" style={{ background: "#F7F7F7" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left — copy + accordion */}
          <div>
            <Reveal direction="right">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1614A" }}>Every Format</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: "#222222" }}>
                Understands{" "}
                <span style={{ color: "#E1614A" }}>everything</span>{" "}
                you capture
              </h2>
              <p className="text-lg mb-12 leading-relaxed" style={{ color: "#5A5A5A" }}>
                Links, recordings, notes, and multi-speaker conversations — Pikaku turns every format into a searchable, AI-powered knowledge base.
              </p>
            </Reveal>

            <div className="space-y-4">
              {cards.map((card, i) => (
                <Reveal key={card.key} direction="right" delay={i * 0.08}>
                  <motion.button
                    onClick={() => setOpen(card.key)}
                    className="w-full text-left p-6 sm:p-7 rounded-3xl border transition-all duration-300"
                    style={{
                      background: open === card.key ? `${card.accent}08` : "#FFFFFF",
                      borderColor: open === card.key ? `${card.accent}35` : "rgba(0,0,0,0.08)",
                      boxShadow: open === card.key ? `0 12px 32px ${card.accent}12` : "none",
                    }}
                    whileHover={{ x: 4, borderColor: open === card.key ? `${card.accent}35` : "rgba(0,0,0,0.14)" }}
                  >
                    <div className="flex items-start gap-5 sm:gap-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{ background: open === card.key ? card.accent : "#F0F0F0", color: open === card.key ? "#FFF" : "#9E9E9E", boxShadow: open === card.key ? `0 8px 16px ${card.accent}30` : "none" }}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-[17px]" style={{ color: "#222222" }}>{card.title}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: "#9E9E9E" }}>{card.sub}</p>
                          </div>
                          <ChevronDown size={18} style={{ color: "#C0C0C0", transform: open === card.key ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
                        </div>
                        <AnimatePresence initial={false}>
                          {open === card.key && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="text-[15px] leading-relaxed mt-4 overflow-hidden"
                              style={{ color: "#5A5A5A" }}>
                              {card.desc}
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

          {/* Right — preview panel */}
          <Reveal direction="left">
            <motion.div
              className="rounded-[2.5rem] overflow-hidden"
              style={{ border: "1px solid rgba(225,97,74,0.18)", boxShadow: "0 24px 80px rgba(225,97,74,0.12)" }}
              whileHover={{ boxShadow: "0 32px 96px rgba(225,97,74,0.18)" }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-5 border-b"
                style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                  <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                </div>
                <AnimatePresence mode="wait">
                  {cards.filter(c => c.key === open).map(c => (
                    <motion.span key={c.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-[13px] font-bold uppercase tracking-widest" style={{ color: c.accent }}>
                      {c.title}
                    </motion.span>
                  ))}
                </AnimatePresence>
                <div className="w-14" />
              </div>

              {/* Preview content */}
              <div className="p-8 bg-white min-h-[320px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {cards.filter(c => c.key === open).map(c => (
                    <motion.div key={c.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                          style={{ background: c.accent }}>
                          {c.icon}
                        </div>
                        <div>
                          <p className="font-bold text-[17px]" style={{ color: "#222222" }}>{c.title}</p>
                          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9E9E9E" }}>{c.sub}</p>
                        </div>
                      </div>
                      <div className="transform scale-105 origin-left">
                        {c.preview}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-[2rem] px-6 py-4 hidden lg:flex items-center gap-3"
              style={{ border: "1px solid rgba(225,97,74,0.2)", boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}>
              <div className="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-xl">🔍</div>
              <div className="text-left">
                <p className="text-sm font-bold" style={{ color: "#222222" }}>All formats, one vault</p>
                <p className="text-[11px] font-medium" style={{ color: "#9E9E9E" }}>searchable with AI</p>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
