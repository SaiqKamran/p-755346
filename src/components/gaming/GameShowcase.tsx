import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { SplineSceneDemo } from "@/components/ui/spline-scene-demo";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Courses } from "@/components/ui/courses";

export const GameShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  return (
    <section className="flex flex-col items-center px-4 relative" ref={showcaseRef}>
      {/* Background Paths */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      
      {/* Content (with higher z-index) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <TextCursorProximity 
          label="Arena Animation Chandigarh Sector 9" 
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
          containerRef={showcaseRef} 
          className="text-white text-4xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase max-w-[718px] mt-20 md:mt-[137px] max-md:max-w-full mx-auto px-[41px] my-[21px]" 
        />
        <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] text-center max-w-[718px] mt-6 max-md:max-w-full mx-auto">
          Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. It is part of the Arena Animation brand, which was established in 1996 and through which over 4 lakh students have been trained in Animation and VFx in more than 20 countries.
        </p>

        <div className="w-full max-w-[1200px] mt-8 mb-16 mx-auto">
          <SplineSceneDemo />
        </div>

        <Courses 
          title="Our Course Offerings" 
          description="Transform your creative passion into a successful career with our industry-focused animation and VFX courses"
        />
      </div>
    </section>
  );
};
