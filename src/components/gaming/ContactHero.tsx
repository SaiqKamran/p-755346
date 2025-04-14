
import React from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

export const ContactHero = () => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-indigo-900/50 to-[#1b1240]">
      <TextCursorProximity 
        label="Contact Us"
        styles={{
          transform: {
            from: "scale(1)",
            to: "scale(1.3)"
          },
          color: {
            from: "#FFFFFF",
            to: "#FFD700"
          }
        }} 
        falloff="gaussian" 
        radius={200} 
        className="text-white text-5xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase" 
      />
    </div>
  );
};
