import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StartsWithYou from "@/components/StartsWithYou";
import DailyIntelligence from "@/components/DailyIntelligence";
import OnDemand from "@/components/OnDemand";
import UnderstandsEverything from "@/components/UnderstandsEverything";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div id="snap-root" className="snap-container">
        <Hero />
        <StartsWithYou />
        <DailyIntelligence />
        <OnDemand />
        <UnderstandsEverything />
        <Comparison />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
