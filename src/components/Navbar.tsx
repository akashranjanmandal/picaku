"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5C3.94 21.8 3 21.33 3 20.5z" />
  </svg>
);

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <a href={href} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors duration-200" style={{ textDecoration: "none" }}>
    {label}
  </a>
);

const StoreBadge = ({ icon, sub, label, href = "#" }: { icon: React.ReactNode; sub: string; label: string; href?: string }) => (
  <a
    href={href}
    className="transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] pointer-events-auto"
    style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: "6px 12px", borderRadius: 10,
      background: "#000", color: "#fff",
      textDecoration: "none", flexShrink: 0,
      border: "1px solid rgba(255,255,255,0.1)",
    }}
  >
    {icon}
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{ fontSize: 8, fontWeight: 500, opacity: 0.6, textTransform: "uppercase" }}>{sub}</span>
      <span style={{ fontSize: 12, fontWeight: 700 }}>{label}</span>
    </div>
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.getElementById("snap-root");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 50);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "calc(100% - 2rem)",
          maxWidth: 1280,
          padding: "20px 32px",
          borderRadius: 32,
          pointerEvents: "auto",
        }}
        className={`transition-all duration-500 border ${scrolled
            ? "bg-white/90 backdrop-blur-xl border-primary/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            : "bg-white/50 backdrop-blur-md border-white/20 shadow-none"
          }`}
      >
        {/* Left: Logo Image */}
        <a href="/" className="flex items-center group" style={{ textDecoration: "none" }}>
          <img 
            src="/logo.png" 
            alt="Picaku Logo" 
            style={{ 
              width: 110,
              height: 30,
              objectFit: "contain", 
              filter: scrolled ? "brightness(0)" : "brightness(0) opacity(0.8)" 
            }} 
          />
        </a>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
          <NavLink label="Features" href="#features" />
          <NavLink label="Intelligence" href="#intelligence" />
          <NavLink label="Use Cases" href="#use-cases" />
          <NavLink label="Capabilities" href="#capabilities" />
          <NavLink label="Testimonials" href="#testimonials" />
          <NavLink label="Contact" href="#contact" />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-3">
            <StoreBadge icon={<AppleIcon />} sub="Download on" label="App Store" />
            <StoreBadge icon={<PlayIcon />} sub="Get it on" label="Play Store" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-2xl hover:bg-gray-100 transition-colors pointer-events-auto"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} className="text-primary" style={{ color: "#E1614A" }} /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{
              position: "absolute",
              top: 100,
              left: 16,
              right: 16,
              padding: 32,
              background: "#fff",
              borderRadius: 40,
              border: "1px solid rgba(225,97,74,0.1)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              pointerEvents: "auto"
            }}
            className="md:hidden"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { label: "Features", href: "#features" },
                { label: "Intelligence", href: "#intelligence" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Capabilities", href: "#capabilities" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  style={{ 
                    padding: "12px 16px", 
                    fontSize: 18, 
                    fontWeight: 700, 
                    color: "#222", 
                    textDecoration: "none", 
                    borderBottom: "1px solid #F3F4F6",
                    display: "block"
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 16 }}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <StoreBadge icon={<AppleIcon />} sub="Download on" label="App Store" />
                  <StoreBadge icon={<PlayIcon />} sub="Get it on" label="Play Store" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
