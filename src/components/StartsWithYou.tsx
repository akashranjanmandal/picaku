"use client";
import { Mic, Link2, FileText } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    icon: <Mic size={20} />, step: "01", title: "Record", accent: "#E1614A",
    desc: "Tap record and speak. Picaku captures every word live with noise suppression, auto speaker-separation, and real-time transcription — on iOS, Android, or Web.",
    bars: [
      { label: "Quiet Room", value: 0.99 },
      { label: "Coffee Shop", value: 0.92 },
      { label: "Lecture Hall", value: 0.95 },
      { label: "Street Noise", value: 0.88 }
    ], barLabel: "Transcription accuracy across environments"
  },
  {
    icon: <Link2 size={20} />, step: "02", title: "Add a Link", accent: "#F7AC2C",
    desc: "Paste any URL — article, YouTube video, research paper, or webpage. Picaku fetches and reads the full content so you can chat with it and get instant insights.",
    bullets: ["Articles & blogs", "YouTube videos", "Research papers", "Any webpage"]
  },
  {
    icon: <FileText size={20} />, step: "03", title: "Write a Note", accent: "#CA142B",
    desc: "Type freeform notes or paste any text. Everything lands in your Memory Vault — auto-tagged, timestamped, and available for AI chat and memory search instantly.",
    quote: '"Launch date moved to Oct 15 — confirm with design team before Thursday." — saved, searchable, forever.'
  },
];

export default function StartsWithYou() {
  return (
    <Section id="features" bg="#F9FAFB">
      <Reveal direction="up">
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", marginBottom: 12 }}>
            Add anything to your <span style={{ color: "#E1614A" }}>memory</span>
          </h2>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: 520, margin: "0 auto", color: "#555", lineHeight: 1.6 }}>
            Whether it&apos;s live speech, a link from the web, or a quick typed note — Picaku handles it all.
          </p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {steps.map((s, i) => (
          <Reveal key={s.step} direction="up" delay={i * 0.1}>
            <motion.div whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(225,97,74,0.12)" }}
              style={{ background: "#fff", borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", height: "100%", border: "1px solid rgba(225,97,74,0.1)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 24, right: 24, fontSize: 96, fontWeight: 900, lineHeight: 1, opacity: 0.03, color: "#222", pointerEvents: "none", userSelect: "none" }}>{s.step}</div>
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`, boxShadow: `0 6px 16px ${s.accent}30`, flexShrink: 0 }}>{s.icon}</div>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 900, color: "#222", marginBottom: 8, letterSpacing: "-0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#555", marginBottom: 16, flex: 1 }}>{s.desc}</p>
                <div style={{ marginTop: "auto" }}>
                  {s.bars && (
                    <div style={{ background: "#F5F5F5", borderRadius: 12, padding: 16, border: "1px solid rgba(0,0,0,0.04)" }}>
                      {s.bars.map((bar, j) => (
                        <div key={j} style={{ marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: "#444" }}>{bar.label}</span>
                            <span style={{ fontSize: 11, fontWeight: 900, color: s.accent }}>{Math.round(bar.value * 100)}%</span>
                          </div>
                          <div style={{ height: 6, borderRadius: 999, background: "rgba(0,0,0,0.08)", overflow: "hidden" }}>
                            <motion.div style={{ height: "100%", borderRadius: 999, background: s.accent }} initial={{ width: 0 }} whileInView={{ width: `${bar.value * 100}%` }} transition={{ duration: 1.2, delay: j * 0.1 }} />
                          </div>
                        </div>
                      ))}
                      <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.4, color: "#222", marginTop: 8 }}>{s.barLabel}</p>
                    </div>
                  )}
                  {s.bullets && (
                    <div style={{ background: "#F5F5F5", borderRadius: 12, padding: 16, border: "1px solid rgba(0,0,0,0.04)" }}>
                      {s.bullets.map((b) => (
                        <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${s.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: 10, fontWeight: 900, color: s.accent }}>✓</span>
                          </div>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#444" }}>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {s.quote && (
                    <div style={{ background: "#F5F5F5", borderRadius: 12, padding: 16, borderLeft: `4px solid ${s.accent}` }}>
                      <p style={{ fontSize: 14, fontStyle: "italic", lineHeight: 1.6, color: "#444" }}>{s.quote}</p>
                      <p style={{ fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: s.accent, marginTop: 8 }}>Memory highlight</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
