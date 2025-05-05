
import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { Button } from "./Button";
import { Meteors } from "@/components/ui/meteors";
import { openWhatsAppChat } from "@/utils/whatsapp";

export const AdmissionHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <Meteors number={20} />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video 3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-[1]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center" ref={heroRef}>
        <div className="space-y-8">
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="whatsapp" onClick={() => openWhatsAppChat("Admission Inquiry")} />
            <Button variant="call" onClick={handleCall} />
          </div>
          
          <TextCursorProximity
            label="Admission Open 2025"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.2)"
              },
              color: {
                from: "#FFC107", // Amber/Yellow
                to: "#FFD700" // Gold
              }
            }}
            falloff="gaussian"
            radius={200}
            containerRef={heroRef}
            className="text-4xl md:text-6xl font-bold text-yellow-400"
          />
          
          <div className="mt-8">
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Employment Driven Education - Transform your creative passion into a successful career
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
