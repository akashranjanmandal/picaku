"use client";
import Section from "./Section";

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5C3.94 21.8 3 21.33 3 20.5z" />
  </svg>
);

export default function Footer() {
  return (
    <Section bg="#0D0D0D">
      <div
        style={{ width: "100%", display: "grid", gap: 40, marginBottom: 48 }}
        className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]"
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <img src="/logo.png" alt="Picaku Logo" style={{ width: 'auto', height: 40, filter: 'brightness(0) invert(1)' }} className="object-contain object-left -ml-2 invert" />
          <p style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 500, color: "#888", maxWidth: 300 }}>
            Picaku turns your recordings into a living knowledge base. Capture, transcribe, and chat with your memories.
          </p>

          {/* Store badges */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 11, background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2A2A2A")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1C1C1C")}>
              <AppleIcon />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: 8, fontWeight: 500, color: "#999", textTransform: "uppercase" }}>Download on</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>App Store</div>
              </div>
            </a>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 11, background: "#1C1C1C", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#2A2A2A")}
              onMouseLeave={e => (e.currentTarget.style.background = "#1C1C1C")}>
              <PlayIcon />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: 8, fontWeight: 500, color: "#999", textTransform: "uppercase" }}>Get it on</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Play Store</div>
              </div>
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { name: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { name: "Github", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
              { name: "Linkedin", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
            ].map(({ name, path }) => (
              <a key={name} href="#" aria-label={name}
                style={{ width: 34, height: 34, borderRadius: 9, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 14, height: 14 }}><path d={path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 col-span-1 md:col-span-4 gap-8 md:gap-4">
          {[
            { heading: "Product", links: ["Features", "How it works", "Pricing", "API"] },
            { heading: "Company", links: ["About", "Careers", "Blog", "Press"] },
            { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            { heading: "Support", links: ["Help Center", "Status", "Contact Us", "Feedback"] },
          ].map(({ heading, links }) => (
            <div key={heading} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h4 style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#555" }}>{heading}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ fontSize: 14, fontWeight: 600, color: "#666", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#666")}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#555" }}>© 2026 Picaku AI. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "#555", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: 13, fontWeight: 600, color: "#555", textDecoration: "none" }}>Terms of Service</a>
        </div>
      </div>
    </Section>
  );
}
