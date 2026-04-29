"use client";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StartsWithYou from "@/components/StartsWithYou";
import DailyIntelligence from "@/components/DailyIntelligence";
import OnDemand from "@/components/OnDemand";
import UnderstandsEverything from "@/components/UnderstandsEverything";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <Navbar />
        <Hero />
        <StartsWithYou />
        <DailyIntelligence />
        <OnDemand />
        <UnderstandsEverything />
        <Testimonials />
        <Contact />
        <Footer />
      </SmoothScroll>
    </>
  );
}
