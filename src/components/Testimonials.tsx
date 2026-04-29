"use client";
import Reveal from "./Reveal";
import Section from "./Section";

const testimonials = [
  { quote: "I used to spend 45 minutes writing meeting notes after every call. With Picaku I get a perfect summary the second the call ends. It's genuinely changed how I work.", name: "Sarah Chen", role: "Product Manager, Notion", avatar: "SC", grad: "linear-gradient(135deg,#FB923C,#EF4444)" },
  { quote: "The 'chat with your recording' feature is unlike anything I've seen. I asked Picaku what a client said about pricing three weeks ago — it found the exact moment instantly.", name: "Marcus Lee", role: "Sales Director, HubSpot", avatar: "ML", grad: "linear-gradient(135deg,#60A5FA,#6366F1)" },
  { quote: "As a researcher, I record dozens of interviews a month. Pikaku's memory highlights mean I can actually find that one quote I remember hearing months ago.", name: "Dr. Priya Nair", role: "UX Researcher, Google", avatar: "PN", grad: "linear-gradient(135deg,#C084FC,#EC4899)" },
  { quote: "I pasted a 40-page research paper link and asked Picaku to compare it to my last three customer interviews. The synthesis it gave me was mind-blowing.", name: "James Wright", role: "Founder, EduTech startup", avatar: "JW", grad: "linear-gradient(135deg,#34D399,#14B8A6)" },
  { quote: "Lectures, office hours, study groups — I record everything and Picaku handles the rest. My GPA went up a full point since I started using it.", name: "Aisha Okafor", role: "Graduate Student, MIT", avatar: "AO", grad: "linear-gradient(135deg,#FBBF24,#F97316)" },
  { quote: "We replaced Otter.ai and Fireflies combined with just Pikaku. The AI summary and chat features alone justify the entire cost of the team plan.", name: "David Park", role: "CTO, Streamline.io", avatar: "DP", grad: "linear-gradient(135deg,#22D3EE,#3B82F6)" },
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div style={{
    width: 300, flexShrink: 0,
    background: "#fff", borderRadius: 20, padding: 20,
    border: "1px solid rgba(0,0,0,0.07)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  }}>
    <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1, opacity: 0.15, color: "#E1614A", marginBottom: 10, userSelect: "none" }}>&ldquo;</div>
    <p style={{ fontSize: 13, lineHeight: 1.65, fontWeight: 500, color: "#5A5A5A", marginBottom: 16 }}>{t.quote}</p>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#222" }}>{t.name}</p>
        <p style={{ fontSize: 11, fontWeight: 500, color: "#888" }}>{t.role}</p>
      </div>
    </div>
  </div>
);

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

export default function Testimonials() {
  return (
    <Section id="testimonials" bg="#FFF5F3">
      {/* decorative bg blob */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, #E1614A, transparent 70%)", opacity: 0.04, animation: "float-alt 18s ease-in-out infinite" }} />
      </div>

      <Reveal direction="up">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", marginBottom: 8 }}>
            Loved by <span style={{ color: "#E1614A" }}>8,000+ users</span>
          </h2>
        </div>
      </Reveal>

      <div style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", display: "flex", flexDirection: "column", gap: 16, overflow: "hidden" }}>
        {/* mask edges */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right, #FFF5F3 0%, transparent 8%, transparent 92%, #FFF5F3 100%)" }} />

        {/* Row 1 — scrolls left */}
        <div className="marquee-l" style={{ display: "flex", gap: 16, width: "max-content" }}>
          {row1.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </Section>
  );
}
