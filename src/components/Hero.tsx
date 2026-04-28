"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Mic, Sparkles, Link2, FileText } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

const platforms = ["Meetings", "Lectures", "Voice Notes", "Interviews", "Podcasts", "Phone Calls"];

export default function Hero() {
  return (
    <section className="snap-section flex flex-col justify-center py-20 px-5 sm:px-8 lg:px-10 bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle,#E1614A,transparent)" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle,#F7AC2C,transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center">

          {/* Badge */}
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] font-bold mb-10 border"
            style={{ background: "rgba(225,97,74,0.08)", color: "#E1614A", borderColor: "rgba(225,97,74,0.22)" }}>
            <motion.span animate={{ scale: [1,1.5,1] }} transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full" style={{ background: "#E1614A" }} />
            100% Free · No Credit Card · No Limits
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] mb-8 tracking-tight"
            style={{ color: "#222222" }}>
            Record. Transcribe.<br />
            <span className="shimmer-text">Never Forget a Word.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={fadeUp}
            className="text-lg sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#5A5A5A" }}>
            Pikaku turns every meeting, lecture, and voice note into accurate transcripts, smart summaries, memory highlights, and a knowledge base you can chat with.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a href="#" className="hover-glow flex items-center gap-3 text-white font-bold px-9 py-5 rounded-2xl text-lg"
              style={{ background: "linear-gradient(135deg,#E1614A,#C44A34)", boxShadow: "0 4px 24px rgba(225,97,74,0.36)" }}>
              <Mic size={20} />
              Start Recording Free
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works"
              className="flex items-center gap-2 text-base font-bold transition-colors duration-200 group"
              style={{ color: "#5A5A5A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1614A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5A5A")}>
              See how it works
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Stars */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-1.5 mb-12">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span key={i} initial={{ opacity:0, scale:0 }} animate={{ opacity:1, scale:1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}>
                  <Star size={16} style={{ color:"#F7AC2C", fill:"#F7AC2C" }} />
                </motion.span>
              ))}
            </div>
            <span className="ml-3 text-[15px]" style={{ color:"#9E9E9E" }}>
              Loved by <strong style={{ color:"#222222" }}>8,000+</strong> users worldwide
            </span>
          </motion.div>

          {/* Platform chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
            {platforms.map((p, i) => (
              <motion.span key={p}
                initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }}
                transition={{ delay: 0.9 + i * 0.06 }}
                whileHover={{ scale:1.07, y:-2 }}
                className="text-[13px] font-bold px-5 py-2.5 rounded-full border cursor-default transition-all duration-200"
                style={{ background:"#FFFFFF", borderColor:"rgba(225,97,74,0.2)", color:"#5A5A5A" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E1614A"; (e.currentTarget as HTMLElement).style.color = "#E1614A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,97,74,0.2)"; (e.currentTarget as HTMLElement).style.color = "#5A5A5A"; }}>
                {p}
              </motion.span>
            ))}
          </motion.div>

          {/* App preview */}
          <motion.div variants={fadeUp}
            className="relative rounded-[2rem] overflow-hidden transition-all duration-300"
            style={{ border:"1px solid rgba(225,97,74,0.18)", boxShadow:"0 32px 96px rgba(225,97,74,0.14)" }}
            whileHover={{ boxShadow:"0 48px 128px rgba(225,97,74,0.2)" }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-6 py-4 border-b" style={{ background:"#F7F7F7", borderColor:"rgba(0,0,0,0.08)" }}>
              <div className="flex gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
              </div>
              <div className="ml-6 rounded-lg px-4 h-7 flex items-center text-sm max-w-[240px] w-full"
                style={{ background:"#E8E8E8", color:"#9E9E9E" }}>app.picaku.io</div>
            </div>

            {/* Dashboard */}
            <div className="grid md:grid-cols-4 bg-white divide-x" style={{ borderColor:"rgba(0,0,0,0.06)" }}>
              {/* Sidebar */}
              <div className="p-8 space-y-4 text-left border-b md:border-b-0">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color:"#9E9E9E" }}>Memory Vault</p>
                {[
                  { icon:<Mic size={14}/>,      title:"Team Standup",         sub:"Today 9:00 AM", grad:"from-orange-400 to-red-500" },
                  { icon:<Mic size={14}/>,      title:"Client Call",          sub:"Yesterday",     grad:"from-blue-400 to-indigo-500" },
                  { icon:<FileText size={14}/>, title:"Meeting Notes",        sub:"Oct 3",         grad:"from-purple-400 to-pink-500" },
                  { icon:<Link2 size={14}/>,    title:"ISRO Research",        sub:"Added link",    grad:"from-emerald-400 to-teal-500" },
                ].map((r) => (
                  <div key={r.title}
                    className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 group"
                    style={{ border:"1px solid transparent" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(225,97,74,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(225,97,74,0.18)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${r.grad} flex-shrink-0 flex items-center justify-center text-white shadow-sm`}>{r.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold truncate" style={{ color:"#222222" }}>{r.title}</p>
                      <p className="text-[11px] truncate" style={{ color:"#9E9E9E" }}>{r.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main pane */}
              <div className="p-8 md:col-span-3 space-y-8 text-left">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color:"#9E9E9E" }}>Team Standup · Transcript</p>
                    <p className="text-[13px] mt-1 font-medium" style={{ color:"#222222" }}>Today 9:00 AM · 12 min · 3 speakers</p>
                  </div>
                  <span className="text-[12px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{ background:"rgba(225,97,74,0.12)", color:"#E1614A" }}>
                    AI Summary Ready
                  </span>
                </div>

                {/* Summary card */}
                <div className="rounded-2xl p-6 border space-y-3"
                  style={{ background:"rgba(225,97,74,0.04)", borderColor:"rgba(225,97,74,0.16)" }}>
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} style={{ color:"#E1614A" }} />
                    <p className="text-[13px] font-bold" style={{ color:"#E1614A" }}>AI Summary</p>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color:"#5A5A5A" }}>
                    Sprint 12 planning completed. Launch confirmed for Oct 15 pending design sign-off by Thursday. Two blockers: design approval and missing API keys from client.
                  </p>
                </div>

                {/* Transcript lines */}
                <div className="space-y-4">
                  {[
                    { speaker:"Alex", text:"Launch is confirmed for Oct 15 — but we need design sign-off before Thursday.", time:"0:42" },
                    { speaker:"Mia",  text:"I'll chase the design team today. Sam, any update on the API keys?",           time:"0:51" },
                    { speaker:"Sam",  text:"Still waiting on the client. I'll follow up this afternoon.",                  time:"0:58" },
                  ].map((l) => (
                    <div key={l.time}
                      className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200"
                      style={{ border:"1px solid transparent" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FAFAFA"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-lg flex-shrink-0 mt-0.5"
                        style={{ background:"#F0F0F0", color:"#5A5A5A" }}>{l.speaker}</span>
                      <p className="text-[15px] flex-1 leading-relaxed" style={{ color:"#5A5A5A" }}>{l.text}</p>
                      <span className="text-[11px] flex-shrink-0 font-medium" style={{ color:"#C0C0C0" }}>{l.time}</span>
                    </div>
                  ))}
                </div>

                {/* Action chips */}
                <div className="flex gap-3 flex-wrap pt-2">
                  {["Chat for Insights","Full Transcript","Highlights","Share"].map((t) => (
                    <span key={t}
                      className="text-[13px] font-bold px-5 py-2 rounded-xl border cursor-pointer transition-all duration-200"
                      style={{ background:"#FFFFFF", borderColor:"#E8E8E8", color:"#5A5A5A" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E1614A"; (e.currentTarget as HTMLElement).style.color = "#E1614A"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E8E8"; (e.currentTarget as HTMLElement).style.color = "#5A5A5A"; }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
