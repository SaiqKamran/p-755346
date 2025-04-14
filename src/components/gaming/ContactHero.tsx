
import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { SplineScene } from "@/components/ui/splite";

export const ContactHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-indigo-900/50 to-[#1b1240]">
      <div className="absolute inset-0 z-0">
        <SplineScene
          scene="https://prod.spline.design/JzRiRqqnSQDSHQnx/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div 
        className="relative z-10"
        ref={heroRef}
      >
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
          containerRef={heroRef}
          className="text-white text-5xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase" 
        />
      </div>
    </div>
  );
};
