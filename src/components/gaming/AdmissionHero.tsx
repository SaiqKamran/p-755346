
import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { Button } from "./Button";
import { Meteors } from "@/components/ui/meteors";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { Phone } from "lucide-react";

export const AdmissionHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <Meteors number={20} />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-[#1b1240]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center" ref={heroRef}>
        <div className="space-y-8">
          <TextCursorProximity
            label="Admission Open 2025"
            styles={{
              transform: {
                from: "scale(1)",
                to: "scale(1.2)"
              },
              color: {
                from: "#FFFFFF",
                to: "#FFD700"
              }
            }}
            falloff="gaussian"
            radius={200}
            containerRef={heroRef}
            className="text-4xl md:text-6xl font-bold text-white"
          />
          
          <div className="mt-8">
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
              Employment Driven Education - Transform your creative passion into a successful career
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button 
              variant="primary"
              onClick={() => {
                console.log("Admission Inquiry - Opening WhatsApp");
                openWhatsAppChat("Admission Inquiry");
              }}
            >
              WhatsApp Us
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleCall}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
