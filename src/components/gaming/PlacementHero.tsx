
import React, { useRef } from "react";
import { Meteors } from "@/components/ui/meteors";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

export const PlacementHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Meteors 
          number={40}
          className="before:from-purple-500 before:via-purple-400 bg-purple-400 shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]"
        />
      </div>
      
      <div ref={containerRef} className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center">
          <TextCursorProximity 
            label="Placement & Recruitment Assistance"
            containerRef={containerRef}
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-12"
          />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Arena Animation Chandigarh 9 strives to provide job-oriented animation education to its students. Our research teams spend countless hours analyzing trends and requirements of the animation job market to ensure our courses prepare you for the right jobs.
          </p>
        </div>
      </div>
    </section>
  );
};
