"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I used to spend 45 minutes writing meeting notes after every call. With Pikaku I get a perfect summary the second the call ends. It's genuinely changed how I work.",
    name: "Sarah Chen",
    role: "Product Manager, Notion",
    avatar: "SC",
    grad: "from-orange-400 to-red-500",
  },
  {
    quote: "The 'chat with your recording' feature is unlike anything I've seen. I asked Pikaku what a client said about pricing three weeks ago — it found the exact moment instantly.",
    name: "Marcus Lee",
    role: "Sales Director, HubSpot",
    avatar: "ML",
    grad: "from-blue-400 to-indigo-500",
  },
  {
    quote: "As a researcher, I record dozens of interviews a month. Pikaku's memory highlights mean I can actually find that one quote I remember hearing months ago.",
    name: "Dr. Priya Nair",
    role: "UX Researcher, Google",
    avatar: "PN",
    grad: "from-purple-400 to-pink-500",
  },
  {
    quote: "I pasted a 40-page research paper link and asked Pikaku to compare it to my last three customer interviews. The synthesis it gave me was mind-blowing.",
    name: "James Wright",
    role: "Founder, EduTech startup",
    avatar: "JW",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    quote: "Lectures, office hours, study groups — I record everything and Pikaku handles the rest. My GPA went up a full point since I started using it.",
    name: "Aisha Okafor",
    role: "Graduate Student, MIT",
    avatar: "AO",
    grad: "from-yellow-400 to-orange-500",
  },
  {
    quote: "We replaced Otter.ai and Fireflies combined with just Pikaku. The AI summary and chat features alone justify the entire cost of the team plan.",
    name: "David Park",
    role: "CTO, Streamline.io",
    avatar: "DP",
    grad: "from-cyan-400 to-blue-500",
  },
];

export default function Testimonials() {
  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto w-full">
        <Reveal direction="up" className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1614A" }}>What People Say</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#222222" }}>
            Loved by{" "}
            <span style={{ color: "#E1614A" }}>8,000+ users</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#5A5A5A" }}>From researchers to founders — here&apos;s how Pikaku changed how they work.</p>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.07} className="break-inside-avoid">
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(225,97,74,0.14)" }}
                className="rounded-3xl p-8 transition-all duration-300"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)" }}
              >
                <div className="text-5xl font-bold mb-4 leading-none opacity-20 select-none" style={{ color: "#E1614A" }}>&ldquo;</div>
                <p className="text-base leading-relaxed mb-8 font-medium" style={{ color: "#5A5A5A" }}>{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.grad} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[15px] font-bold" style={{ color: "#222222" }}>{t.name}</p>
                    <p className="text-[13px] font-medium opacity-60" style={{ color: "#222222" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
