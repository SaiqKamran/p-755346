
import React from "react";
import { HeroSection } from "@/components/gaming/HeroSection";
import { GameShowcase } from "@/components/gaming/GameShowcase";
import { FeatureSection } from "@/components/gaming/FeatureSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { TextCursorProximityDemo } from "@/components/ui/text-cursor-proximity-demo";
import { TestimonialSection } from "@/components/gaming/TestimonialSection";

const Index = () => {
  return (
    <div className="bg-[rgba(45,30,107,1)] flex flex-col overflow-hidden items-center rounded-[10px] relative">
      {/* Black gradient overlay moved to back */}
      <div 
        className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-black to-transparent z-0"
      />
      
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
        <TestimonialSection />
        <TextCursorProximityDemo />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
