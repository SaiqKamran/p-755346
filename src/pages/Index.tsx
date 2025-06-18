
import React from "react";
import { ModernHeroSection } from "@/components/gaming/ModernHeroSection";
import { ModernSecondSection } from "@/components/gaming/ModernSecondSection";
import { ModernPlacementSection } from "@/components/gaming/ModernPlacementSection";
import { ModernCoursesSection } from "@/components/gaming/ModernCoursesSection";
import { ModernLabsSection } from "@/components/gaming/ModernLabsSection";
import { TestimonialSection } from "@/components/gaming/TestimonialSection";
import { HomeNewsSection } from "@/components/gaming/HomeNewsSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden relative">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      
      <div className="relative w-full">
        <ModernHeroSection />
        <ModernSecondSection />
        <ModernPlacementSection />
        <ModernCoursesSection />
        <ModernLabsSection />
        <TestimonialSection />
        <HomeNewsSection />
        <LocationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
