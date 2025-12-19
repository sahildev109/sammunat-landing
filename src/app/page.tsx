// src/app/page.tsx
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <Features/> 
      <HowItWorks/>
      <CTA/>
    </>
  );
}
