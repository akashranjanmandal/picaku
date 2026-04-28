"use client";
import { Mic, Link2, FileText } from "lucide-react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Mic size={22} />,
    step: "01",
    title: "Record",
    metric: "99% accuracy",
    accent: "#E1614A",
    desc: "Tap record and speak. Pikaku captures every word live with noise suppression, auto speaker-separation, and real-time transcription — on iOS, Android, or Web.",
    bars: [1, 0.88, 0.95, 0.78, 0.92],
    barLabel: "Transcription accuracy across environments",
  },
  {
    icon: <Link2 size={22} />,
    step: "02",
    title: "Add a Link",
    metric: "Any URL",
    accent: "#F7AC2C",
    desc: "Paste any URL — article, YouTube video, research paper, or webpage. Pikaku fetches and reads the full content so you can chat with it and get instant insights.",
    bullets: ["Articles & blogs", "YouTube videos", "Research papers", "Any webpage"],
  },
  {
    icon: <FileText size={22} />,
    step: "03",
    title: "Write a Note",
    metric: "Always searchable",
    accent: "#CA142B",
    desc: "Type freeform notes or paste any text. Everything lands in your Memory Vault — auto-tagged, timestamped, and available for AI chat and memory search instantly.",
    quote: "\"Launch date moved to Oct 15 — confirm with design team before Thursday.\" — saved, searchable, forever.",
  },
];

export default function StartsWithYou() {
  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10" style={{ background:"#F7F7F7" }} id="features">
      <div className="max-w-7xl mx-auto w-full">
        <Reveal direction="up" className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1614A" }}>Three Ways In</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#222222" }}>
            Add anything to your{" "}
            <span style={{ color: "#E1614A" }}>memory</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "#5A5A5A" }}>
            Whether it's live speech, a link from the web, or a quick typed note — Pikaku handles it all.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.step} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full rounded-[2.5rem] p-10 flex flex-col transition-all duration-300"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 48px rgba(0,0,0,0.04)" }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}dd)`, boxShadow: `0 8px 24px ${s.accent}33` }}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full"
                    style={{ background: `${s.accent}14`, color: s.accent }}>
                    {s.metric}
                  </span>
                </div>

                <p className="text-7xl font-bold mb-4 leading-none opacity-10 select-none"
                  style={{ color: s.accent }}>{s.step}</p>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#222222" }}>{s.title}</h3>
                <p className="text-[15px] leading-relaxed mb-10 flex-1" style={{ color: "#5A5A5A" }}>{s.desc}</p>

                {/* Preview widget */}
                {s.bars && (
                  <div className="rounded-2xl p-6 space-y-4" style={{ background: "#F7F7F7" }}>
                    {s.bars.map((w, j) => (
                      <div key={j} className="h-2 rounded-full overflow-hidden" style={{ background: `${s.accent}12` }}>
                        <motion.div className="h-full rounded-full" style={{ background: s.accent, width: `${w * 100}%` }}
                          initial={{ width: 0 }} whileInView={{ width: `${w * 100}%` }}
                          transition={{ duration: 0.9, delay: j * 0.1, ease: [0.22, 1, 0.36, 1] }} />
                      </div>
                    ))}
                    <p className="text-[11px] font-bold mt-2 uppercase tracking-widest" style={{ color: "#9E9E9E" }}>{s.barLabel}</p>
                  </div>
                )}
                {s.bullets && (
                  <div className="rounded-2xl p-6 grid grid-cols-1 gap-4" style={{ background: "#F7F7F7" }}>
                    {s.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${s.accent}14` }}>
                          <span className="text-[10px] font-bold" style={{ color: s.accent }}>✓</span>
                        </div>
                        <span className="text-sm font-bold" style={{ color: "#5A5A5A" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                {s.quote && (
                  <div className="rounded-2xl p-7 border-l-4" style={{ background: "#F7F7F7", borderColor: s.accent }}>
                    <p className="text-sm italic leading-relaxed font-medium" style={{ color: "#5A5A5A" }}>{s.quote}</p>
                    <p className="text-[11px] font-bold mt-4 uppercase tracking-widest" style={{ color: s.accent }}>← Memory highlight</p>
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
