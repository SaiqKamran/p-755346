
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { PlacementHero } from "@/components/gaming/PlacementHero";
import { CompanyGrid } from "@/components/gaming/CompanyGrid";
import { PlacementInfo } from "@/components/gaming/PlacementInfo";
import { ContactSection } from "@/components/gaming/ContactSection";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Placements = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <PlacementHero />
      <PlacementInfo />
      <CompanyGrid />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Placements;
