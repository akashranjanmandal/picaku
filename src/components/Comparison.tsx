"use client";
import Reveal from "./Reveal";

const competitors = [
  { name: "Otter.ai",  logo: "O", color: "#3B82F6" },
  { name: "Fireflies", logo: "F", color: "#10B981" },
  { name: "Rev",       logo: "R", color: "#8B5CF6" },
  { name: "Whisper",   logo: "W", color: "#6B7280" },
];

const rows = [
  { feature: "Real-time live transcription",     pikaku: true,  others: true  },
  { feature: "AI-generated smart summary",        pikaku: true,  others: false },
  { feature: "Chat with your recording (AI Q&A)", pikaku: true,  others: false },
  { feature: "Discuss any link via AI",           pikaku: true,  others: false },
  { feature: "Memory highlights & search",        pikaku: true,  others: false },
  { feature: "Timestamped text notes",            pikaku: true,  others: false },
  { feature: "Multi-speaker auto-labeling",       pikaku: true,  others: true  },
  { feature: "Works offline",                     pikaku: true,  others: false },
];

export default function Comparison() {
  return (
    <section className="snap-section flex flex-col justify-center py-24 px-5 sm:px-8 lg:px-10" style={{ background: "#F5F5F5" }} id="alternatives">
      <div className="max-w-6xl mx-auto w-full">
        <Reveal direction="up" className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E1614A" }}>Why Pikaku</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#222222" }}>
            More than just a{" "}
            <span style={{ color: "#E1614A" }}>transcription tool</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "#5A5A5A" }}>
            Every other tool records and transcribes. Pikaku turns your recordings into a living, searchable, AI-powered knowledge base.
          </p>
        </Reveal>

        <Reveal direction="scale">
          <div className="rounded-[2.5rem] overflow-hidden shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            {/* Header */}
            <div className="grid grid-cols-3">
              <div className="p-8 flex items-center" style={{ background: "#F2F2F2" }}>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em]" style={{ color: "#9E9E9E" }}>Capability</p>
              </div>
              <div className="p-8 text-center flex flex-col items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg,#E1614A,#F7AC2C)" }}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
                <p className="text-xl font-bold text-white tracking-tight">Pikaku</p>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-1">Unlimited Free</span>
              </div>
              <div className="p-8 text-center flex flex-col items-center justify-center" style={{ background: "#F2F2F2" }}>
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  {competitors.map((c) => (
                    <span key={c.name} title={c.name} className="w-6 h-6 rounded-lg text-white text-[10px] font-bold flex items-center justify-center shadow-md" style={{ background: c.color }}>
                      {c.logo}
                    </span>
                  ))}
                </div>
                <p className="text-[13px] font-bold uppercase tracking-[0.15em]" style={{ color: "#9E9E9E" }}>Standard Apps</p>
              </div>
            </div>

            {rows.map((row, i) => (
              <div key={row.feature} className="grid grid-cols-3" style={{ background: i % 2 === 0 ? "#FFFFFF" : "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="p-6 sm:p-8 flex items-center">
                  <p className="text-[15px] sm:text-base font-bold" style={{ color: "#222222" }}>{row.feature}</p>
                </div>
                <div className="p-6 sm:p-8 flex items-center justify-center" style={{ background: i % 2 === 0 ? "rgba(225,97,74,0.04)" : "rgba(225,97,74,0.06)" }}>
                  {row.pikaku
                    ? <span className="text-2xl font-bold" style={{ color: "#E1614A" }}>✓</span>
                    : <span className="text-2xl" style={{ color: "#DDDDDD" }}>✗</span>}
                </div>
                <div className="p-6 sm:p-8 flex items-center justify-center">
                  {row.others
                    ? <span className="text-2xl font-bold" style={{ color: "#10B981" }}>✓</span>
                    : <span className="text-2xl" style={{ color: "#DDDDDD" }}>✗</span>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
