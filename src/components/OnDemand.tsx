"use client";
import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, ClipboardList, Rocket, Bell, Key } from "lucide-react";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const questions = [
  { q: "What were the action items?", icon: <CheckCircle2 size={16} /> },
  { q: "Summarise my last 3 meetings", icon: <ClipboardList size={16} /> },
  { q: "What did we decide about the launch?", icon: <Rocket size={16} /> },
  { q: "What should I follow up on?", icon: <Bell size={16} /> },
  { q: "Find notes about API keys", icon: <Key size={16} /> },
];
const answers: Record<string, { text: string; tag: string }> = {
  "What were the action items?": { text: "Two action items found:\n· Follow up with design team — due Thursday (Alex)\n· Collect API keys from client — pending (Sam)", tag: "From: Team Standup · Oct 3" },
  "Summarise my last 3 meetings": { text: "Team Standup (Dec 1): Sprint 12 planning, 2 blockers.\nClient Call (Nov 29): Acme Corp onboarding, go-live Jan 10.\nML Lecture (Nov 28): Gradient descent & backprop.", tag: "3 recordings analysed" },
  "What did we decide about the launch?": { text: "Launch confirmed for Oct 15, pending design sign-off by Thursday. Fallback date is Oct 22 if sign-off is missed.", tag: "From: Product Sync · 0:47" },
  "What should I follow up on?": { text: "Three things to follow up:\n· Design approval — Thursday deadline\n· Client API keys (Sam)\n· Confirm launch date once both resolved", tag: "Across 2 recordings" },
  "Find notes about API keys": { text: "Found in 'Client Call — Oct 3': Sam is responsible for collecting API keys from the client. Status: pending. Mentioned at 1:02.", tag: "Memory match · 98% confidence" },
};

export default function OnDemand() {
  const [selected, setSelected] = useState(questions[0].q);
  const answer = answers[selected];
  return (
    <Section id="use-cases" bg="#F7F9FF">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
        <div>
          <Reveal direction="right">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 900, color: "#E1614A", background: "rgba(225,97,74,0.1)", border: "1px solid rgba(225,97,74,0.2)", marginBottom: 16 }}>
              <MessageCircle size={13} /> Insights from Memories
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", marginBottom: 12 }}>
              Chat with your entire <span style={{ color: "#E1614A" }}>memory</span>
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "#555", lineHeight: 1.6, marginBottom: 20 }}>Ask Picaku anything — across all your recordings, notes, and links. It finds the answer instantly.</p>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9E9E9E", marginBottom: 12 }}>Try asking:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {questions.map((item) => (
                <motion.button key={item.q} onClick={() => setSelected(item.q)} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}
                  style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "left", fontSize: 14, fontWeight: 600, padding: "12px 16px", borderRadius: 12, border: `1px solid ${selected === item.q ? "rgba(225,97,74,0.3)" : "rgba(0,0,0,0.07)"}`, background: selected === item.q ? "rgba(225,97,74,0.07)" : "#FAFAFA", color: selected === item.q ? "#E1614A" : "#5A5A5A", cursor: "pointer", transition: "all 0.2s" }}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, flexShrink: 0 }}>{item.icon}</span>
                  {item.q}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", background: "#fff", boxShadow: "0 12px 48px rgba(0,0,0,0.07)" }}>
              <div style={{ display: "flex", gap: 6, padding: "14px 20px", background: "#FDFDFD", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
              </div>
              <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16, background: "#fff" }}>
                <motion.div key={selected + "u"} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ maxWidth: "80%", padding: "10px 16px", borderRadius: "16px 16px 4px 16px", fontSize: 14, fontWeight: 600, color: "#fff", background: "#E1614A" }}>{selected}</div>
                </motion.div>
                <AnimatePresence mode="wait">
                  <motion.div key={selected + "a"} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.15, duration: 0.3 }} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ flexShrink: 0, paddingTop: 4 }}>
                      <img src="/logo.png" alt="Picaku" style={{ height: 18, width: "auto", objectFit: "contain", filter: "invert(1) brightness(0) contrast(1000%)" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ padding: "12px 16px", borderRadius: "16px 16px 16px 4px", background: "#fff", border: "1px solid rgba(225,97,74,0.15)", color: "#222" }}>
                        {answer.text.split("\n").map((line, idx) => <p key={idx} style={{ fontSize: 14, lineHeight: 1.5, marginTop: idx > 0 ? 6 : 0 }}>{line}</p>)}
                      </div>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9E9E9E", marginTop: 6, marginLeft: 4 }}>{answer.tag}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div style={{ padding: "0 20px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderRadius: 12, background: "#FAFAFA", border: "1px solid rgba(225,97,74,0.2)" }}>
                  <span style={{ flex: 1, fontSize: 14, color: "#C0C0C0" }}>Ask about your memories…</span>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ width: 32, height: 32, borderRadius: 8, background: "#E1614A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <Send size={14} style={{ color: "#fff" }} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
