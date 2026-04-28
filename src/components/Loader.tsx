"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "pikaku".split("");

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [letterStates, setLetterStates] = useState<boolean[]>(LETTERS.map(() => false));

  useEffect(() => {
    // Animate letters one by one
    LETTERS.forEach((_, i) => {
      setTimeout(() => {
        setLetterStates((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 140);
    });

    // Animate progress bar
    const steps = [
      { target: 15,  delay: 300 },
      { target: 35,  delay: 600 },
      { target: 55,  delay: 900 },
      { target: 72,  delay: 1200 },
      { target: 88,  delay: 1500 },
      { target: 96,  delay: 1800 },
      { target: 100, delay: 2100 },
    ];

    steps.forEach(({ target, delay }) => {
      setTimeout(() => setProgress(target), delay);
    });

    // Finish
    setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600);
    }, 2600);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#1a1a1a" }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(225,97,74,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Letter-by-letter brand name */}
          <div className="flex items-end gap-1 sm:gap-2 mb-10">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                animate={letterStates[i] ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl sm:text-8xl font-black tracking-tight"
                style={{
                  color: i % 2 === 0 ? "#E1614A" : "#FFFFFF",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  display: "inline-block",
                  transformOrigin: "bottom center",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-sm sm:text-base tracking-[0.3em] uppercase mb-10"
            style={{ color: "#9E9E9E" }}
          >
            AI Social Writing
          </motion.p>

          {/* Progress bar container */}
          <div className="w-64 sm:w-80">
            <div
              className="w-full h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #E1614A, #F7AC2C, #CA142B)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  width: `${progress}%`,
                  backgroundPosition: [`0% 0%`, `100% 0%`],
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between mt-2">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-xs"
                style={{ color: "#5A5A5A" }}
              >
                Loading experience
              </motion.span>
              <span className="text-xs font-mono" style={{ color: "#E1614A" }}>
                {progress}%
              </span>
            </div>
          </div>

          {/* Floating dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6 + i * 2,
                height: 6 + i * 2,
                background: "#E1614A",
                opacity: 0.3,
                left: `${20 + i * 30}%`,
                top: `${70 + i * 5}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
