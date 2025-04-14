
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { ContactForm } from "@/components/gaming/ContactForm";
import { LocationSection } from "@/components/gaming/LocationSection";
import { SplineScene } from "@/components/ui/splite";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <div className="relative min-h-[80vh] bg-gradient-to-b from-indigo-900/50 to-[#1b1240] px-4 py-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ContactForm />
          <div className="relative h-[600px] w-full">
            <SplineScene
              scene="https://prod.spline.design/JzRiRqqnSQDSHQnx/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Contact;
