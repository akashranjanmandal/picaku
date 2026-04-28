import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Pikaku — Record. Transcribe. Never Forget.",
  description: "AI-powered transcription, smart summaries, memory highlights, and AI chat for every conversation. Completely free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${ptSans.className}`} style={{ background: "#FFFFFF", color: "#222222" }}>
        {children}
      </body>
    </html>
  );
}
