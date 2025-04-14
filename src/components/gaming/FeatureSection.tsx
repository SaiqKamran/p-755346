import React, { useRef } from "react";
import { Button } from "./Button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { ImageCarousel } from "./ImageCarousel";
import { Meteors } from "@/components/ui/meteors";

export const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative" ref={sectionRef}>
      {/* Enhanced gradient transition - taller and extends further down */}
      <div className="absolute top-[-200px] left-0 right-0 h-[800px] bg-gradient-to-b from-[#1A1F2C] via-[rgba(26,31,44,0.7)] to-[#0006] z-0" />
      
      {/* Purplish-black background section */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1A1F2C] z-0" />
      
      <div className="flex flex-col items-center px-4 py-20 relative overflow-hidden">
        {/* Meteors with increased number and customized appearance */}
        <div className="absolute inset-0 z-5">
          <Meteors 
            number={40} 
            className="before:from-purple-500 before:via-purple-400 bg-purple-400 shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]" 
          />
        </div>
        
        <div className="shadow-[0px_4px_20px_-1px_rgba(0,0,0,0)] w-full max-w-[1240px] mt-[111px] rounded-[10px] max-md:mt-10 max-md:pr-5 relative z-10">
          <div className="gap-8 flex flex-col md:flex-row max-md:items-stretch">
            <div className="w-full md:w-[50%] max-md:w-full">
              <ImageCarousel />
            </div>
            <div className="w-full md:w-[50%] max-md:w-full">
              <div className="flex flex-col h-full justify-center max-md:mt-10">
                <TextCursorProximity label="Why Arena Animation Chandigarh Sector - 9" styles={{
                transform: {
                  from: "scale(1)",
                  to: "scale(1.3)"
                },
                color: {
                  from: "#FFFFFF",
                  to: "#FFD700"
                }
              }} falloff="gaussian" radius={200} containerRef={sectionRef} className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.24px] uppercase max-md:text-3xl mx-[3px] px-0 py-[8px]" />
                <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] mt-6 max-md:max-w-full">
                  Arena Animation Chandigarh Sector 9 is the leading animation institute in Chandigarh, equipped with the latest and state-of-the-art infrastructure such as large 3D labs equipped with 27-inch curved screen monitors for visualization and animation, special hardware for game development and separate rooms for visualization, sketching and VFx.
                </p>
                <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] mt-4 max-md:max-w-full">
                  Arena Animation Chandigarh 9 offers over 2500 sq. ft of training area for a truly inspiring and creative training experience including large development areas equipped with the latest hardware.
                </p>
                <div className="mt-8">
                  <Button variant="primary">Contact Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1240px] mt-20 relative z-10">
          <TextCursorProximity label="The Industry" styles={{
          transform: {
            from: "scale(1)",
            to: "scale(1.3)"
          },
          color: {
            from: "#FFFFFF",
            to: "#FFD700"
          }
        }} falloff="gaussian" radius={200} containerRef={sectionRef} className="text-white text-4xl font-extrabold mb-12 uppercase tracking-wider text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">FOUNDED</div>
              <div className="text-5xl font-extrabold text-yellow-400">1996</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">STUDENTS</div>
              <div className="text-5xl font-extrabold text-yellow-400">450,000+</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-3xl font-bold text-white mb-2">COUNTRIES</div>
              <div className="text-4xl font-extrabold text-yellow-400">Over 20</div>
              <div className="text-sm text-white mt-2">including China</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
