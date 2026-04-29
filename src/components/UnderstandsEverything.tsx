"use client";
import { useState, type ReactNode } from "react";
import { Link2, Star, FileText, Users, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

type CardKey = "link" | "highlight" | "notes" | "speakers";
const cards: { key: CardKey; icon: ReactNode; title: string; sub: string; accent: string; desc: string; preview: ReactNode }[] = [
  {
    key: "link", icon: <Link2 size={18} />, title: "Discuss Any Link", sub: "Articles · Videos · Papers", accent: "#E1614A",
    desc: "Paste any URL and Picaku reads the full content. Ask questions, get summaries, and extract key insights from any article, YouTube video, or research paper.",
    preview: (
      <div style={{ background: "#F7F7F7", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 12, borderRadius: 10, background: "#fff", border: "1px solid rgba(225,97,74,0.15)" }}>
          <Link2 size={12} style={{ color: "#E1614A" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#5A5A5A" }}>youtube.com/watch?v=abc123</span>
        </div>
        <div style={{ padding: 12, borderRadius: 10, background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#E1614A", marginBottom: 4 }}>✨ AI Summary</p>
          <p style={{ fontSize: 12, lineHeight: 1.5, color: "#5A5A5A" }}>This video covers key principles of machine learning — from supervised learning to neural networks.</p>
        </div>
      </div>
    )
  },
  {
    key: "highlight", icon: <Star size={18} />, title: "Memory Highlights", sub: "Saved · Searchable · Forever", accent: "#F7AC2C",
    desc: "Tap any line in a transcript to save it as a Memory Highlight. Your best insights are pinned, searchable, and ready to reference across any future conversation.",
    preview: (
      <div style={{ background: "#F7F7F7", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        {[{ text: "Launch confirmed for Oct 15 — pending design sign-off.", time: "0:42" }, { text: "API keys still waiting on the client.", time: "1:02" }].map(h => (
          <div key={h.time} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 12, borderRadius: 10, background: "#fff", border: "1px solid rgba(247,172,44,0.25)" }}>
            <Star size={11} style={{ color: "#F7AC2C", fill: "#F7AC2C", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 12, flex: 1, lineHeight: 1.5, color: "#222" }}>{h.text}</p>
            <span style={{ fontSize: 12, flexShrink: 0, color: "#C0C0C0" }}>{h.time}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    key: "notes", icon: <FileText size={18} />, title: "Text Notes", sub: "Type · Paste · Save", accent: "#CA142B",
    desc: "Write freeform notes or paste any text directly. Everything lands in your Memory Vault — auto-tagged, timestamped, and fully searchable with AI chat.",
    preview: (
      <div style={{ background: "#F7F7F7", borderRadius: 12, padding: 16 }}>
        <div style={{ padding: 12, borderRadius: 10, background: "#fff", border: "1px solid rgba(202,20,43,0.15)" }}>
          <p style={{ fontSize: 12, lineHeight: 1.5, fontStyle: "italic", color: "#5A5A5A" }}>&quot;Launch date moved to Oct 15 — confirm with design team before Thursday. Sam handling API keys from client side.&quot;</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
            <span style={{ fontSize: 11, color: "#9E9E9E" }}>Oct 3, 2025 · 2:14 PM</span>
            <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: "rgba(202,20,43,0.09)", color: "#CA142B" }}>Saved</span>
          </div>
        </div>
      </div>
    )
  },
  {
    key: "speakers", icon: <Users size={18} />, title: "Speaker Recognition", sub: "Auto-detect · Label · Separate", accent: "#232323",
    desc: "Picaku automatically detects and separates speakers in every recording. Each voice gets its own label so you always know who said what, no manual tagging needed.",
    preview: (
      <div style={{ background: "#F7F7F7", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
        {[{ speaker: "Alex", text: "Launch confirmed for October 15th.", color: "#E1614A" }, { speaker: "Mia", text: "We need design sign-off before Thursday.", color: "#F7AC2C" }, { speaker: "Sam", text: "Backend is ready — waiting on API keys.", color: "#CA142B" }].map(l => (
          <div key={l.speaker} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 10, borderRadius: 10, background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 6, background: `${l.color}14`, color: l.color, flexShrink: 0 }}>{l.speaker}</span>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: "#5A5A5A" }}>{l.text}</p>
          </div>
        ))}
      </div>
    )
  },
];

export default function UnderstandsEverything() {
  const [open, setOpen] = useState<CardKey>("link");
  const activeCard = cards.find(c => c.key === open)!;
  return (
    <Section id="capabilities" bg="#F9FAFB">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
        <div>
          <Reveal direction="right">
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", marginBottom: 12 }}>
              Understands <span style={{ color: "#E1614A" }}>everything</span> you capture
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {cards.map((card, i) => (
              <Reveal key={card.key} direction="right" delay={i * 0.08}>
                <motion.button onClick={() => setOpen(card.key)} whileHover={{ x: 4 }}
                  style={{ width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: 16, border: `1px solid ${open === card.key ? `${card.accent}35` : "rgba(0,0,0,0.08)"}`, background: open === card.key ? `${card.accent}08` : "#fff", cursor: "pointer", transition: "all 0.3s" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: open === card.key ? card.accent : "#F0F0F0", color: open === card.key ? "#fff" : "#9E9E9E", transition: "all 0.3s" }}>{card.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#222" }}>{card.title}</h3>
                          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9E9E9E", marginTop: 2 }}>{card.sub}</p>
                        </div>
                        <ChevronDown size={18} style={{ color: "#C0C0C0", transform: open === card.key ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s", flexShrink: 0 }} />
                      </div>
                      <AnimatePresence initial={false}>
                        {open === card.key && (
                          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                            style={{ fontSize: 14, lineHeight: 1.6, color: "#666", marginTop: 8, overflow: "hidden" }}>{card.desc}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="left">
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(225,97,74,0.18)", boxShadow: "0 12px 40px rgba(225,97,74,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#FEBC2E", display: "inline-block" }} />
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
              </div>
              <AnimatePresence mode="wait">
                <motion.span key={open} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: activeCard.accent }}>{activeCard.title}</motion.span>
              </AnimatePresence>
              <div style={{ width: 56 }} />
            </div>
            <div style={{ padding: 20, background: "#fff" }}>
              <AnimatePresence mode="wait">
                <motion.div key={open} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: activeCard.accent }}>{activeCard.icon}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#222" }}>{activeCard.title}</p>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9E9E9E" }}>{activeCard.sub}</p>
                    </div>
                  </div>
                  {activeCard.preview}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
