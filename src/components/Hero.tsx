"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Triangle, Hexagon, Circle, Square, Command, Infinity as InfinityIcon } from "lucide-react";
import Section from "./Section";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };
const platforms = ["Meetings", "Lectures", "Voice Notes", "Interviews", "Podcasts", "Phone Calls"];

const brands = [
  { name: "Acme", icon: <Triangle size={24} fill="currentColor" /> },
  { name: "Quantum", icon: <Hexagon size={24} fill="currentColor" /> },
  { name: "Nexus", icon: <Circle size={24} fill="currentColor" /> },
  { name: "Horizon", icon: <Square size={24} fill="currentColor" /> },
  { name: "Infinity", icon: <InfinityIcon size={24} /> },
  { name: "Command", icon: <Command size={24} /> },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create extremely smooth spring physics for the parallax delay
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

  // Transform springs into distinct pixel movements for each flare to create 3D depth
  const x1 = useTransform(springX, [-1, 1], [-80, 80]);
  const y1 = useTransform(springY, [-1, 1], [-80, 80]);

  const x2 = useTransform(springX, [-1, 1], [60, -60]);
  const y2 = useTransform(springY, [-1, 1], [60, -60]);

  const x3 = useTransform(springX, [-1, 1], [-120, 120]);
  const y3 = useTransform(springY, [-1, 1], [-120, 120]);

  return (
    <Section bg="#ffffff">
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", background: "#fff", zIndex: 0 }}>
        {/* Antigravity Flare 1: Primary Orange/Red */}
        <motion.div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60vw", height: "60vw", x: x1, y: y1 }}>
          <motion.div animate={{ x: [0, 60, -30, 0], y: [0, -50, 30, 0], scale: [1, 1.1, 0.9, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(225,97,74,0.18) 0%, transparent 60%)", filter: "blur(80px)" }} />
        </motion.div>

        {/* Antigravity Flare 2: Yellow/Gold */}
        <motion.div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "70vw", height: "70vw", x: x2, y: y2 }}>
          <motion.div animate={{ x: [0, -80, 40, 0], y: [0, 60, -40, 0], scale: [1, 0.85, 1.15, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(247,172,44,0.12) 0%, transparent 60%)", filter: "blur(100px)" }} />
        </motion.div>

        {/* Antigravity Flare 3: Center Accent (Crimson) */}
        <motion.div style={{ position: "absolute", top: "10%", left: "20%", width: "50vw", height: "50vw", x: x3, y: y3 }}>
          <motion.div animate={{ x: [-40, 90, -60, -40], y: [-60, 30, 70, -60], rotate: [0, 180, 360] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ width: "100%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(202,20,43,0.08) 0%, transparent 60%)", filter: "blur(120px)" }} />
        </motion.div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", width: "100%", position: "relative", zIndex: 1 }}>
        <motion.div variants={stagger} initial="hidden" animate="visible">


          <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 900, lineHeight: 0.95, marginBottom: 24, letterSpacing: "-0.03em", color: "#222222" }}>
            Record. Transcribe.<br />
            <span className="shimmer-text">Never Forget.</span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 500, color: "#444444" }}>
            Picaku turns every meeting, lecture, and voice note into accurate transcripts, smart summaries, and a searchable knowledge base you can chat with.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 40 }}>
            <a href="#" className="btn-minimal">
              <span>Start Recording Free</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9E9E9E", marginBottom: 24 }}>
              Trusted by forward-thinking teams
            </p>
            
            <div style={{ position: "relative", width: "100%", overflow: "hidden", maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}>
              <div className="marquee-l" style={{ display: "flex", width: "max-content", gap: 80, alignItems: "center", paddingRight: 80 }}>
                {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, filter: "grayscale(100%) opacity(0.5)", transition: "all 0.3s", cursor: "default", flexShrink: 0 }} 
                       onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%) opacity(1)"}
                       onMouseLeave={e => e.currentTarget.style.filter = "grayscale(100%) opacity(0.5)"}>
                    {brand.icon}
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#444", letterSpacing: "-0.04em" }}>{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
}
