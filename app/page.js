import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "PageStitches — Professional Websites for Hyderabad Businesses | ₹5,999",
  description:
    "Hyderabad's AI-native web studio. Professional websites in 48 hours starting ₹5,999. Mobile-first, SEO-optimized, WhatsApp-integrated. No templates — every site built from scratch.",
  alternates: {
    canonical: "https://pagestitches.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <BeforeAfter />
      <Process />
      <Services />
      <FAQ />
      <FinalCTA />
    </>
  );
}
