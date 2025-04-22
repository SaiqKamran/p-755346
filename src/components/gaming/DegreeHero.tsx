
import React from "react";
import { Button } from "./Button";
import TextCursorProximity from "../ui/text-cursor-proximity";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { Phone } from "lucide-react";

export const DegreeHero = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <TextCursorProximity
            containerRef={containerRef}
            label="Bachelor of Vocational Studies"
            styles={{
              transform: {
                from: "translateY(-10px) scale(0.95)",
                to: "translateY(0px) scale(1)",
              },
              color: {
                from: "#9b87f5",
                to: "#ffffff",
              },
            }}
            falloff="gaussian"
            radius={300}
            className="text-4xl md:text-6xl font-bold mb-6 block"
          />
          <div className="mt-4 mb-8">
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Start your journey towards a successful career in the creative industry with our B.Voc program, 
              recognized by UGC under Section 22(3) of UGC Act, 1956. Equivalent to any conventional degree 
              and eligible for government positions.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" onClick={() => openWhatsAppChat("B.Voc Degree Inquiry")}>
              WhatsApp Us
            </Button>
            <Button variant="secondary" onClick={handleCall}>
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

