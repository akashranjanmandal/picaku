import { CSSProperties, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  bg?: string;
  className?: string;
  style?: CSSProperties;
}

const sectionStyle: CSSProperties = {
  minHeight: "100dvh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "clamp(80px, 10vh, 120px)",
  paddingBottom: "clamp(80px, 10vh, 120px)",
  paddingLeft: "clamp(20px, 8vw, 100px)",
  paddingRight: "clamp(20px, 8vw, 100px)",
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  flexShrink: 0,
  scrollSnapAlign: "start",
};

const innerStyle: CSSProperties = {
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
};

export default function Section({ children, id, bg = "#ffffff", className = "", style = {} }: SectionProps) {
  return (
    <section id={id} style={{ ...sectionStyle, background: bg, ...style }} className={className}>
      <div style={innerStyle}>
        {children}
      </div>
    </section>
  );
}
