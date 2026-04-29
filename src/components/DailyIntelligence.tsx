"use client";
import { useState } from "react";
import { Mic, Zap, FileSearch, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const steps = [
  { num: "01", icon: <Mic size={16} />, title: "Tap Record", accent: "#E1614A", desc: "Open Picaku and hit Record. Works for meetings, phone calls, lectures, and voice notes — on iOS, Android, or desktop. Speaker detection separates voices automatically." },
  { num: "02", icon: <Zap size={16} />, title: "AI Transcribes in Seconds", accent: "#F7AC2C", desc: "The moment you stop, Pikaku's AI delivers a word-for-word transcript with punctuation, paragraph breaks, and speaker labels. No manual clean-up needed." },
  { num: "03", icon: <FileSearch size={16} />, title: "Smart Summary & Notes", accent: "#CA142B", desc: "An AI-generated summary with key points, decisions, and action items is ready instantly. Add your own timestamped text notes right alongside the transcript." },
  { num: "04", icon: <MessageCircle size={16} />, title: "Chat with Your Memory", accent: "#232323", desc: "Ask Picaku anything about your recording. 'What were the action items?' 'What did Sarah say about the deadline?' Precise answers, instantly." },
];

const lines = [
  { speaker: "Alex", text: "So the launch is confirmed for October 15th, right?", time: "0:42" },
  { speaker: "Mia", text: "Yes — but we need design sign-off before Thursday or we push to the 22nd.", time: "0:47" },
  { speaker: "Alex", text: "Got it. I'll follow up with the design team today.", time: "0:53" },
  { speaker: "Sam", text: "Backend is ready. Just waiting on the API keys from the client.", time: "1:02" },
];

export default function DailyIntelligence() {
  const [active, setActive] = useState(0);
  return (
    <Section id="intelligence" bg="#FFFBF8">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
        <div>
          <Reveal direction="right">
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", marginBottom: 12 }}>
              recording to <span style={{ color: "#E1614A" }}>insight</span> in minutes
            </h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {steps.map((s, i) => (
              <Reveal key={s.num} direction="right" delay={i * 0.08}>
                <motion.button onClick={() => setActive(i)} whileHover={{ x: 4 }}
                  style={{ width: "100%", textAlign: "left", padding: "14px 16px", borderRadius: 16, border: `1px solid ${active === i ? "rgba(225,97,74,0.3)" : "rgba(0,0,0,0.07)"}`, background: active === i ? "rgba(225,97,74,0.04)" : "#fff", boxShadow: active === i ? "0 8px 24px rgba(225,97,74,0.08)" : "none", cursor: "pointer", transition: "all 0.3s" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: active === i ? s.accent : "#F0F0F0", color: active === i ? "#fff" : "#888", transition: "all 0.3s" }}>{s.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontSize: 11, fontWeight: 900, opacity: 0.3, letterSpacing: "0.1em", color: "#222" }}>{s.num}</span>
                        <h3 style={{ fontSize: 15, fontWeight: 900, color: "#222" }}>{s.title}</h3>
                      </div>
                      <AnimatePresence initial={false}>
                        {active === i && (
                          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}
                            style={{ fontSize: 14, lineHeight: 1.6, color: "#666", marginTop: 8, overflow: "hidden" }}>{s.desc}</motion.p>
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
          <div style={{ position: "relative" }}>
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
              style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(225,97,74,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "#F9FAFB", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 999, background: "rgba(225,97,74,0.08)", border: "1px solid rgba(225,97,74,0.12)" }}>
                  <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 8, height: 8, borderRadius: "50%", background: "#E1614A", display: "inline-block" }} />
                  <span style={{ fontSize: 12, fontWeight: 900, color: "#E1614A" }}>RECORDING · 1:02</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#888" }}>Product Sync</span>
              </div>
              <div style={{ display: "flex", gap: 8, padding: "16px 20px 8px" }}>
                {["Transcript", "Chats", "Summary"].map((t, i) => (
                  <span key={t} style={{ fontSize: 12, fontWeight: 900, padding: "6px 14px", borderRadius: 999, border: `1px solid ${i === 0 ? "#E1614A" : "rgba(0,0,0,0.06)"}`, background: i === 0 ? "#fff" : "transparent", color: i === 0 ? "#E1614A" : "#888", cursor: "pointer" }}>{t}</span>
                ))}
              </div>
              <div style={{ padding: "0 20px 16px", display: "flex", flexDirection: "column", gap: 8, background: "#fff" }}>
                {lines.map((line, i) => (
                  <motion.div key={line.time} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 12px", borderRadius: 12, background: i === lines.length - 1 ? "rgba(225,97,74,0.04)" : "transparent", border: `1px solid ${i === lines.length - 1 ? "rgba(225,97,74,0.1)" : "transparent"}` }}>
                    <span style={{ fontSize: 11, fontWeight: 900, padding: "4px 8px", borderRadius: 8, background: "#F0F0F0", color: "#555", flexShrink: 0, minWidth: 48, textAlign: "center" }}>{line.speaker}</span>
                    <p style={{ fontSize: 13, flex: 1, lineHeight: 1.5, color: "#222" }}>{line.text}</p>
                    <span style={{ fontSize: 11, flexShrink: 0, opacity: 0.3, color: "#222" }}>{line.time}</span>
                  </motion.div>
                ))}
                <div style={{ background: "rgba(225,97,74,0.04)", border: "1px solid rgba(225,97,74,0.12)", borderRadius: 12, padding: "12px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <Sparkles size={13} style={{ color: "#E1614A" }} />
                    <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "#E1614A" }}>AI Intelligence Detected</p>
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#555" }}>· Design sign-off — <strong style={{ color: "#222" }}>Alex</strong> · Due Thursday</p>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#555", marginTop: 4 }}>· API keys from client — <strong style={{ color: "#222" }}>Sam</strong> · Pending</p>
                </div>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: -16, right: -16, background: "#fff", borderRadius: 16, padding: "12px 16px", display: "none", alignItems: "center", gap: 10, border: "1px solid rgba(225,97,74,0.2)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              className="hidden lg:flex">
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#FFF3ED", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#222" }}>Instant Analysis</p>
                <p style={{ fontSize: 10, color: "#9E9E9E" }}>ready in seconds</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
