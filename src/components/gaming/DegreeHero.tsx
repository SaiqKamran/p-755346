
import React from "react";
import { Button } from "./Button";
import TextCursorProximity from "../ui/text-cursor-proximity";
import { openWhatsAppChat } from "@/utils/whatsapp";

export const DegreeHero = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-r from-black/90 to-black/95 backdrop-blur-sm"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-[1]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="whatsapp" onClick={() => openWhatsAppChat("B.Voc Degree Inquiry")} />
            <Button variant="call" onClick={handleCall} />
          </div>
          
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
                to: "#9b87f5",
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
        </div>
      </div>
    </div>
  );
};
