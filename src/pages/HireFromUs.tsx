
import React from 'react';
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { HireFromUsSection } from "@/components/gaming/HireFromUsSection";

const HireFromUs: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <HireFromUsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HireFromUs;
