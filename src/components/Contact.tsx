"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "./Section";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section bg="#FAFAFA" id="contact">
      <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#222", lineHeight: 1, marginBottom: 16 }}>
            Get in <span style={{ color: "#E1614A" }}>touch</span>
          </h2>
        </motion.div>

        <div style={{
          background: "#fff",
          borderRadius: 32,
          padding: isMobile ? 24 : 32,
          boxShadow: "0 20px 80px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 32 : 40
        }}>

          {/* Left: Contact Info */}
          <div style={{
            flex: isMobile ? "none" : "0 0 40%",
            background: "#111",
            borderRadius: 32,
            padding: 32,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "rgba(225,97,74,0.3)", borderRadius: "50%", filter: "blur(80px)" }} />
            <div style={{ position: "absolute", bottom: -100, left: -100, width: 300, height: 300, background: "rgba(247,172,44,0.2)", borderRadius: "50%", filter: "blur(80px)" }} />

            <div style={{ position: "relative", zIndex: 10 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Mail size={20} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, color: "#999", fontWeight: 500, marginBottom: 4 }}>Email us</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>hello@picaku.com</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
                    <MapPin size={20} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, color: "#999", fontWeight: 500, marginBottom: 4 }}>Visit us</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>123 Innovation Drive<br/>San Francisco, CA 94103</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Phone size={20} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, color: "#999", fontWeight: 500, marginBottom: 4 }}>Call us</p>
                    <p style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>+1 (555) 123-4567</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16 }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#555", paddingLeft: 4 }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: "100%", padding: "14px 16px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 12, outline: "none", fontSize: 15, fontWeight: 500, color: "#222", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "#E1614A"; }} onBlur={(e) => { e.target.style.background = "#F9FAFB"; e.target.style.borderColor = "#E5E7EB"; }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#555", paddingLeft: 4 }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: "100%", padding: "14px 16px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 12, outline: "none", fontSize: 15, fontWeight: 500, color: "#222", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "#E1614A"; }} onBlur={(e) => { e.target.style.background = "#F9FAFB"; e.target.style.borderColor = "#E5E7EB"; }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#555", paddingLeft: 4 }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: "100%", padding: "14px 16px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 12, outline: "none", fontSize: 15, fontWeight: 500, color: "#222", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "#E1614A"; }} onBlur={(e) => { e.target.style.background = "#F9FAFB"; e.target.style.borderColor = "#E5E7EB"; }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#555", paddingLeft: 4 }}>Message</label>
                <textarea rows={3} placeholder="How can we help you?" style={{ width: "100%", padding: "14px 16px", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: 12, outline: "none", fontSize: 15, fontWeight: 500, color: "#222", resize: "none", transition: "all 0.2s" }} onFocus={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "#E1614A"; }} onBlur={(e) => { e.target.style.background = "#F9FAFB"; e.target.style.borderColor = "#E5E7EB"; }}></textarea>
              </div>

              <button className="btn-minimal" style={{ marginTop: 8, alignSelf: isMobile ? "stretch" : "flex-start", border: "none" }}>
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </Section>
  );
}
