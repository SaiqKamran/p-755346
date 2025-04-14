
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { DegreeHero } from "@/components/gaming/DegreeHero";
import { DegreePrograms } from "@/components/gaming/DegreePrograms";
import { RequestBrochure } from "@/components/gaming/RequestBrochure";
import { CareerOptions } from "@/components/gaming/CareerOptions";
import { Objectives } from "@/components/gaming/Objectives";
import { DegreeInfo } from "@/components/gaming/DegreeInfo";

const Degree = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <DegreeHero />
      <DegreeInfo />
      <Objectives />
      <DegreePrograms />
      <CareerOptions />
      <RequestBrochure />
      <Footer />
    </div>
  );
};

export default Degree;
