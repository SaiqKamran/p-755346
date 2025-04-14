
import React from "react";
import { HeroSection } from "@/components/gaming/HeroSection";
import { GameShowcase } from "@/components/gaming/GameShowcase";
import { FeatureSection } from "@/components/gaming/FeatureSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center relative">
      {/* Position the splash cursor with a high z-index to ensure it's above everything */}
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="relative w-full">
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
