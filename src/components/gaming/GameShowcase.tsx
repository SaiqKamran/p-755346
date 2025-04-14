
import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Courses } from "@/components/ui/courses";

const coursesData = [
  {
    name: "Career Courses (1-2 Years)",
    duration: "1-2 Years",
    features: [
      "Animation Prime",
      "VFX Prime",
      "Broadcast Prime",
      "Industry-recognized certification",
      "Placement assistance"
    ],
    description: "With sharp skills and the right training, work in animation studios, gaming companies, television channels, and more.",
    buttonText: "More Info",
    href: "/career-courses",
    isPopular: true,
  },
  {
    name: "Professional Courses",
    duration: "4-8 Months",
    features: [
      "Graphic Designing",
      "3D Modelling with Max",
      "Rigging",
      "Compositing",
      "Rotoscopy",
      "Job-ready skills"
    ],
    description: "Get Skilled, Get Job Ready, Get Hired!",
    buttonText: "More Info",
    href: "/professional-courses",
    isPopular: false,
  },
  {
    name: "Short Term Courses",
    duration: "1-3 Months",
    features: [
      "Working with Audio",
      "Web Weaver",
      "Corel Draw",
      "Photoshop",
      "Video Editing",
      "Quick skill acquisition"
    ],
    description: "Perfect for learning specific skills and tools quickly",
    buttonText: "More Info",
    href: "/short-courses",
    isPopular: false,
  }
];

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
      
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <TextCursorProximity 
          label="Arena Animation Chandigarh Sector 9" 
          styles={{
            transform: {
              from: "scale(1)",
              to: "scale(1.05)"
            },
            color: {
              from: "#FFFFFF",
              to: "#FF4444"
            }
          }} 
          falloff="gaussian" 
          radius={100} 
          containerRef={showcaseRef} 
          className="text-white text-4xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase max-w-[718px] mt-20 md:mt-[137px] mx-auto" 
        />
        
        <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] text-center max-w-[718px] mt-6 mb-16">
          Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. It is part of the Arena Animation brand, which was established in 1996 and through which over 4 lakh students have been trained in Animation and VFx in more than 20 countries.
        </p>

        <Courses 
          courses={coursesData}
          title="Our Courses"
          description="Choose the perfect course duration that fits your schedule and career goals. All courses include hands-on training, industry projects, and dedicated support."
        />
      </div>
    </section>
  );
};
