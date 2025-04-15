
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { DegreeHero } from "@/components/gaming/DegreeHero";
import { DegreePrograms } from "@/components/gaming/DegreePrograms";
import { RequestBrochure } from "@/components/gaming/RequestBrochure";
import { CareerOptions } from "@/components/gaming/CareerOptions";
import { Objectives } from "@/components/gaming/Objectives";
import { DegreeInfo } from "@/components/gaming/DegreeInfo";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Degree = () => {
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
      <DegreeHero />
      <DegreeInfo />
      <DegreePrograms />
      <Objectives />
      <CareerOptions />
      <RequestBrochure />
      <Footer />
    </div>
  );
};

export default Degree;
