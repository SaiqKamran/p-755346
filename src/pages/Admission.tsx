
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { AdmissionHero } from "@/components/gaming/AdmissionHero";
import { CourseList } from "@/components/gaming/CourseList";
import { AdmissionInfo } from "@/components/gaming/AdmissionInfo";
import { AdmissionFeatures } from "@/components/gaming/AdmissionFeatures";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { ContactSection } from "@/components/gaming/ContactSection";

const Admission = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <Header />
      <AdmissionHero />
      <CourseList />
      <AdmissionInfo />
      <AdmissionFeatures />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Admission;
