
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { ContactHero } from "@/components/gaming/ContactHero";
import { ContactForm } from "@/components/gaming/ContactForm";
import { LocationSection } from "@/components/gaming/LocationSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1b1240]">
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <ContactHero />
      <ContactForm />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Contact;
