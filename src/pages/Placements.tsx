
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { PlacementHero } from "@/components/gaming/PlacementHero";
import { CompanyGrid } from "@/components/gaming/CompanyGrid";
import { PlacementInfo } from "@/components/gaming/PlacementInfo";

const Placements = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <PlacementHero />
      <PlacementInfo />
      <CompanyGrid />
      <Footer />
    </div>
  );
};

export default Placements;
