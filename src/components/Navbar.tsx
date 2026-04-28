"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Features",     href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases",    href: "#use-cases" },
  { label: "Compare",      href: "#compare" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.getElementById("snap-root");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.94)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(225,97,74,0.12)" : "rgba(0,0,0,0.04)"}`,
        boxShadow: scrolled ? "0 2px 20px rgba(225,97,74,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src="/logo.png" alt="Pikaku" fill style={{ objectFit: "contain" }} priority
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              {/* Fallback shown if logo.png not yet added */}
              <div className="absolute inset-0 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "linear-gradient(135deg,#E1614A,#F7AC2C)" }}>
                P
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "#222222" }}>
              pica<span style={{ color: "#E1614A" }}>ku</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="link-underline text-[15px] font-bold transition-colors duration-200"
                style={{ color: "#5A5A5A" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#222222")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5A5A")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-[15px] font-bold transition-colors duration-200"
              style={{ color: "#5A5A5A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1614A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5A5A5A")}>
              Sign in
            </a>
            <a href="#" className="hover-glow flex items-center gap-2 text-white text-[15px] font-bold px-6 py-3 rounded-2xl"
              style={{ background: "linear-gradient(135deg,#E1614A,#C44A34)", boxShadow: "0 4px 14px rgba(225,97,74,0.32)" }}>
              Get Started Free
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 -mr-2 rounded-xl transition-colors hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X size={24} style={{ color: "#E1614A" }} /> : <Menu size={24} style={{ color: "#222222" }} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t" style={{ borderColor: "rgba(225,97,74,0.1)" }}
          >
            <div className="px-5 pb-5 pt-2 space-y-1">
              {navLinks.map((l, i) => (
                <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-2.5 text-sm font-bold border-b" style={{ color: "#5A5A5A", borderColor: "rgba(0,0,0,0.04)" }}>
                  {l.label}
                </motion.a>
              ))}
              <a href="#" className="flex items-center justify-center mt-3 text-white text-sm font-bold px-5 py-3 rounded-xl"
                style={{ background: "linear-gradient(135deg,#E1614A,#C44A34)" }}>
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
