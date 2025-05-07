
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { ContactForm } from "@/components/gaming/ContactForm";
import { LocationSection } from "@/components/gaming/LocationSection";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { ShrekModel } from "@/components/gaming/ShrekModel";
import { ContactHero } from "@/components/gaming/ContactHero";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
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
      <ContactHero />
      <div className="relative min-h-[80vh] bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] px-4 py-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ContactForm />
          <ShrekModel />
        </div>
      </div>
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Contact;
