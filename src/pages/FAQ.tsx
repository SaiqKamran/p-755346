
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { FAQSection } from "@/components/gaming/FAQSection";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { SplineScene } from "@/components/ui/splite";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SplineScene 
          scene="https://prod.spline.design/JzRiRqqnSQDSHQnx/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10">
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
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
