"use client";
import { Check, Gift, Zap, Users } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const tiers = [
  {
    icon: <Gift size={22} />,
    name: "Personal",
    tag: "Always Free",
    tagColor: "#E1614A",
    desc: "Everything you need to record, transcribe, and never forget — at zero cost, forever.",
    cta: "Get Started Free",
    ctaFilled: false,
    features: [
      "Unlimited recordings",
      "AI transcription — 99% accuracy",
      "Smart AI summary per recording",
      "Text notes with timestamps",
      "Memory highlights & search",
      "Chat with any recording",
      "Discuss any link via AI",
      "Multi-speaker auto-labeling",
      "iOS, Android & Web app",
    ],
    highlight: false,
  },
  {
    icon: <Zap size={22} />,
    name: "Power User",
    tag: "Also Free",
    tagColor: "#F7AC2C",
    desc: "For those who record constantly — higher limits and priority AI processing, still at no cost.",
    cta: "Join Waitlist",
    ctaFilled: true,
    features: [
      "Everything in Personal",
      "Priority AI processing queue",
      "Longer recording sessions (8 hrs+)",
      "Bulk export — PDF, DOCX, SRT",
      "Advanced memory search filters",
      "Early access to new features",
    ],
    highlight: true,
    badge: "Coming Soon",
  },
  {
    icon: <Users size={22} />,
    name: "Teams",
    tag: "Free Beta",
    tagColor: "#CA142B",
    desc: "Shared recordings, collaborative notes, and team memory — free during our open beta.",
    cta: "Join Beta",
    ctaFilled: false,
    features: [
      "Everything in Power User",
      "Shared team workspace",
      "Collaborative notes & highlights",
      "Team memory & shared search",
      "Manage up to 10 members",
      "Admin controls & permissions",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="snap-section flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F5F5F5" }} id="pricing">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal direction="up" className="text-center mb-4">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#E1614A" }}>Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: "#222222" }}>
            Free.{" "}
            <span style={{ color: "#E1614A" }}>Forever.</span>{" "}
            No catch.
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: "#5A5A5A" }}>
            Pikaku is completely free to use. Every core feature — transcription, summaries, AI chat, memory — costs nothing. We believe everyone deserves to never forget a word.
          </p>
        </Reveal>

        {/* Free banner */}
        <Reveal direction="up" delay={0.05}>
          <div className="flex items-center justify-center gap-3 py-3 px-5 rounded-2xl mb-10 mx-auto w-fit" style={{ background: "rgba(225,97,74,0.08)", border: "1px solid rgba(225,97,74,0.2)" }}>
            <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }} className="text-xl">🎉</motion.span>
            <p className="text-sm font-bold" style={{ color: "#E1614A" }}>No subscription. No credit card. No limits. Just Pikaku.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: tier.highlight ? 0 : -6 }}
                className="rounded-2xl border p-7 flex flex-col h-full transition-all"
                style={{
                  background: tier.highlight ? "#E1614A" : "#FFFFFF",
                  borderColor: tier.highlight ? "#E1614A" : "rgba(0,0,0,0.06)",
                  boxShadow: tier.highlight ? "0 20px 60px rgba(225,97,74,0.35)" : "none",
                  transform: tier.highlight ? "scale(1.04)" : "scale(1)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                    style={{ background: tier.highlight ? "rgba(255,255,255,0.25)" : tier.tagColor }}
                  >
                    {tier.icon}
                  </div>
                  {tier.badge && (
                    <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}>
                      {tier.badge}
                    </span>
                  )}
                  {!tier.badge && (
                    <span className="text-xs font-black px-3 py-1 rounded-full" style={{ background: tier.highlight ? "rgba(255,255,255,0.2)" : `${tier.tagColor}15`, color: tier.highlight ? "#FFFFFF" : tier.tagColor }}>
                      {tier.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black mb-1" style={{ color: tier.highlight ? "#FFFFFF" : "#222222" }}>{tier.name}</h3>

                {/* Price display */}
                <div className="flex items-end gap-1.5 mb-3">
                  <span className="text-5xl font-black" style={{ color: tier.highlight ? "#FFFFFF" : "#222222" }}>$0</span>
                  <span className="text-sm mb-1.5 font-semibold" style={{ color: tier.highlight ? "rgba(255,255,255,0.7)" : "#9E9E9E" }}>/forever</span>
                </div>

                <p className="text-sm mb-6 leading-relaxed" style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : "#5A5A5A" }}>{tier.desc}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: tier.highlight ? "rgba(255,255,255,0.25)" : "rgba(225,97,74,0.1)" }}>
                        <Check size={11} style={{ color: tier.highlight ? "#FFFFFF" : "#E1614A" }} strokeWidth={3} />
                      </div>
                      <span className="text-sm leading-relaxed" style={{ color: tier.highlight ? "rgba(255,255,255,0.9)" : "#5A5A5A" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 text-center"
                  style={{
                    background: tier.highlight ? "#FFFFFF" : "#E1614A",
                    color: tier.highlight ? "#E1614A" : "#FFFFFF",
                    boxShadow: tier.highlight ? "none" : "0 4px 14px rgba(225,97,74,0.3)",
                  }}
                >
                  {tier.cta}
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 rounded-2xl p-6 text-center" style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}>
            <p className="font-black mb-1" style={{ color: "#222222" }}>Why is Pikaku free?</p>
            <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: "#5A5A5A" }}>
              We built Pikaku because we believe memory is a right, not a premium feature. Our mission is to give everyone — students, professionals, researchers, and creators — the tools to capture and use their knowledge without a price tag.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
