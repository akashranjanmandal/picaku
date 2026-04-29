"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Section from "./Section";

export default function CTA() {
  return (
    <Section id="download" bg="#ffffff">
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
        style={{ borderRadius: 48, padding: "clamp(40px, 6vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#E1614A,#C44A34)", boxShadow: "0 40px 80px rgba(225,97,74,0.25)", width: "100%" }}>
        <Reveal direction="up">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.8 }}
              style={{ width: 64, height: 64, borderRadius: 18, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div style={{ position: "relative", width: 36, height: 36 }}>
                <Image src="/logo.png" alt="Picaku Logo" fill className="object-contain brightness-0 invert" />
              </div>
            </motion.div>
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, color: "#fff", marginBottom: 24, lineHeight: 0.95, letterSpacing: "-0.03em" }}>
            Never forget a<br />word again.
          </h2>
          <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(255,255,255,0.85)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 500 }}>
            Capture your meetings, lectures, and ideas with the world&apos;s most accurate AI knowledge base. 100% free, forever.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <a href="#" className="btn-minimal">
              <span>Start Recording Free</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a href="#" style={{ fontSize: 16, fontWeight: 900, color: "rgba(255,255,255,0.85)", textDecoration: "underline", textUnderlineOffset: 4 }}>
              Download on iOS &amp; Android
            </a>
          </div>
          <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32, opacity: 0.6 }}>
            {["Unlimited Recordings", "99% Accuracy", "No Credit Card"].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                <span style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#fff" }}>{f}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </Section>
  );
}
