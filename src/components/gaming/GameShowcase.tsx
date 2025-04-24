import React, { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { SplineSceneDemo } from "@/components/ui/spline-scene-demo";
import { FloatingPaths } from "@/components/ui/background-paths";
import { Courses } from "@/components/ui/courses";
import { MeteorDemo } from "@/components/ui/meteor-demo";
import { ScrollingCourseBar } from "@/components/ui/scrolling-course-bar";
import { motion } from "framer-motion";

export const GameShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const text = "Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. It is part of the Arena Animation brand, which was established in 1996 and through which over 4 lakh students have been trained in Animation and VFx in more than 20 countries.";
  
  return (
    <section className="flex flex-col items-center px-4 relative" ref={showcaseRef}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <MeteorDemo />
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <ScrollingCourseBar />
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
        <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] text-center max-w-[718px] mt-6 max-md:max-w-full mx-auto flex flex-wrap justify-center">
          {text.split(" ").map((word, wordIndex) => (
            <motion.span 
              key={wordIndex}
              className="mr-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: wordIndex * 0.1
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    fontWeight: [400, 700, 400],
                    transition: {
                      duration: 0.5,
                      delay: (wordIndex * 0.1) + (letterIndex * 0.03),
                      fontWeight: {
                        duration: 0.3,
                        delay: (wordIndex * 0.1) + (letterIndex * 0.03),
                        repeat: 0
                      }
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
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
