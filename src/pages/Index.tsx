
import React from "react";
import { HeroSection } from "@/components/gaming/HeroSection";
import { GameShowcase } from "@/components/gaming/GameShowcase";
import { FeatureSection } from "@/components/gaming/FeatureSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";

const Index = () => {
  return (
    <div className="bg-[rgba(45,30,107,1)] flex flex-col overflow-hidden items-center rounded-[10px]">
      <HeroSection />
      <GameShowcase />
      <FeatureSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
