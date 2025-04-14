
import React, { useRef } from "react";
import { Header } from "./Header";
import { HeroCarousel } from "./HeroCarousel";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      {/* Header with higher z-index */}
      <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full z-20 pt-14">
        <Header />
      </div>
      
      {/* Hero Carousel */}
      <div className="absolute inset-0 z-10">
        <HeroCarousel />
      </div>
    </section>
  );
};
