
import React from "react";
import { Button } from "./Button";
import TextCursorProximity from "../ui/text-cursor-proximity";

export const DegreeHero = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 px-4"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <TextCursorProximity
            containerRef={containerRef}
            label="B.Voc. Degree Program"
            styles={{
              transform: {
                from: "translateY(20px) scale(0.95)",
                to: "translateY(0px) scale(1)",
              },
              color: {
                from: "#9b87f5",
                to: "#ffffff",
              },
            }}
            falloff="gaussian"
            radius={300}
            className="text-4xl md:text-6xl font-bold mb-6"
          />
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            UGC (The University Grants Commission) has bestowed BVoc the same status as any other conventional Degree under Section 22(3) of UGC Act, 1956
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Speak With An Advisor</Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50" />
    </div>
  );
};
