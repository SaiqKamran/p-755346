
import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

export const PlacementHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/video4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80 z-[1]" />
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
            className="text-4xl md:text-6xl font-extrabold text-white mb-16"
          />
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mt-8">
            Arena Animation Chandigarh 9 strives to provide job-oriented animation education to its students. Our research teams spend countless hours analyzing trends and requirements of the animation job market to ensure our courses prepare you for the right jobs.
          </p>
        </div>
      </div>
    </section>
  );
};
