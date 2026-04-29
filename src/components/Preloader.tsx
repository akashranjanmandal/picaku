"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", marginBottom: 40 }}>
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="Picaku"
              style={{ 
                width: 160, 
                height: 45, 
                objectFit: "contain", 
                objectPosition: "center",
                filter: "brightness(0)", 
                opacity: 0.2 
              }}
            />

            {/* Animated Flare Overlay */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                maskImage: "url('/logo.png')",
                WebkitMaskImage: "url('/logo.png')",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  width: "50%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(225,97,74,0.8), transparent)",
                  transform: "skewX(-20deg)",
                }}
              />
            </motion.div>
          </div>

          {/* Voice Waveform Progress Bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 3, height: 40 }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: progress > (i * 5) ? [10, Math.random() * 40 + 10, 10] : 4,
                  backgroundColor: progress > (i * 5) ? "#E1614A" : "#eee"
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5 + Math.random() * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  width: 4,
                  borderRadius: 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
