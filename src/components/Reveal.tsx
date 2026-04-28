"use client";
import { motion, type Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  threshold?: number;
}

const variants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 28 },       visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 28 },       visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -28 },      visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
  fade:  { hidden: { opacity: 0 },              visible: { opacity: 1 } },
};

export default function Reveal({ children, direction = "up", delay = 0, className = "", threshold }: RevealProps) {
  const { ref, visible } = useScrollAnimation(threshold);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={variants[direction]}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
