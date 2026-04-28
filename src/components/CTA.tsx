"use client";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10" style={{ background: "#FAFAFA" }}>
      <div className="w-full max-w-4xl mx-auto text-center">
        <Reveal direction="scale">
          <div className="rounded-[3rem] p-12 sm:p-20 relative overflow-hidden" style={{ background: "linear-gradient(150deg,#CA142B 0%,#E1614A 45%,#F7AC2C 100%)", boxShadow: "0 32px 80px rgba(225,97,74,0.22)" }}>
            {/* Subtle overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 120%, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

            {/* Floating dots — match the Record button aesthetic */}
            <div className="absolute top-8 right-10 grid grid-cols-4 gap-1.5 opacity-20">
              {[...Array(16)].map((_, i) => (
                <motion.div key={i} className="w-2 h-2 rounded-full bg-white"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>

            <div className="relative">
              {/* Logo mark */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-10" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="text-white font-bold text-2xl">P</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Your next conversation<br />deserves to be remembered
              </h2>
              <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
                Record, transcribe, summarise, and chat — completely free, always. Join 8,000+ users capturing life&apos;s best moments.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 font-bold px-10 py-5 rounded-2xl text-[17px] transition-all"
                  style={{ background: "#FFFFFF", color: "#E1614A", boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}
                >
                  Get Started Free
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.2)" }}
                  className="inline-flex items-center gap-2 font-bold px-10 py-5 rounded-2xl text-[17px] transition-all"
                  style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  Watch Demo
                </motion.a>
              </div>

              <p className="text-sm font-bold mt-8 tracking-widest uppercase opacity-60" style={{ color: "#FFFFFF" }}>
                iOS · Android · Web &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; No limits
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
