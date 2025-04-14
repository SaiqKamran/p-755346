import React, { useRef } from "react";
import { Button } from "./Button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { SplineSceneDemo } from "@/components/ui/spline-scene-demo";
export const GameShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  return <section className="flex flex-col items-center px-4" ref={showcaseRef}>
      <TextCursorProximity label="Arena Animation Chandigarh Sector 9" styles={{
      transform: {
        from: "scale(1)",
        to: "scale(1.05)"
      },
      color: {
        from: "#FFFFFF",
        to: "#FF4444"
      }
    }} falloff="gaussian" radius={100} containerRef={showcaseRef} className="text-white text-4xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase max-w-[718px] mt-20 md:mt-[137px] max-md:max-w-full mx-[16px] my-[51px] py-[3px] px-[53px]" />
      <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] text-center max-w-[718px] mt-6 max-md:max-w-full">
        Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. It is part of the Arena Animation brand, which was established in 1996 and through which over 4 lakh students have been trained in Animation and VFx in more than 20 countries.
      </p>

      <div className="w-full max-w-[1200px] mt-8 mb-16">
        <SplineSceneDemo />
      </div>

      <div className="w-full max-w-[1200px] mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">Career Courses (1-2 Years)</h3>
            <ul className="text-white space-y-2 list-disc list-inside mb-6">
              <li>Animation Prime</li>
              <li>VFX Prime</li>
              <li>Broadcast Prime</li>
            </ul>
            <p className="text-white text-sm mb-8">
              With sharp skills and the right training, you can work in animation studios, gaming companies, television channels, advertising agencies & film production companies, and have a high-paying career.
            </p>
            <div className="mt-auto">
              <Button variant="primary">More Info</Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">Professional Courses (4-8 Months)</h3>
            <p className="text-white text-sm mb-4">(Get Skilled, Get Job Ready, Get Hired!)</p>
            <ul className="text-white space-y-2 list-disc list-inside mb-6">
              <li>Graphic Designing</li>
              <li>3D Modelling with Max</li>
              <li>Rigging</li>
              <li>Compositing</li>
              <li>Rotoscopy</li>
              <li>And more...</li>
            </ul>
            <div className="mt-auto">
              <Button variant="primary">More Info</Button>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col">
            <h3 className="text-white text-2xl font-bold mb-4">Short term Courses (1-3 Months)</h3>
            <ul className="text-white space-y-2 list-disc list-inside mb-6">
              <li>Working with Audio</li>
              <li>Web Weaver</li>
              <li>Corel Draw</li>
              <li>Photoshop</li>
              <li>Video Editing</li>
              <li>And more...</li>
            </ul>
            <div className="mt-auto">
              <Button variant="primary">More Info</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};