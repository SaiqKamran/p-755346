
import React from "react";
import { HeroSection } from "@/components/gaming/HeroSection";
import { GameShowcase } from "@/components/gaming/GameShowcase";
import { FeatureSection } from "@/components/gaming/FeatureSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  return (
    <div className="bg-[rgba(45,30,107,1)] flex flex-col overflow-hidden items-center rounded-[10px] relative">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="relative z-10 w-full">
        <HeroSection />
        <GameShowcase />
        <FeatureSection />
        <LocationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
