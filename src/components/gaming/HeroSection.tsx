import React, { useRef, useState } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./Button";
import { Book, GraduationCap } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <div className="relative z-20 w-full max-w-[1239px] mx-auto pt-14 px-4">
        <Header />
      </div>

      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
        onSlideChange={(index) => setActiveSlide(index)}
      >
        <CarouselContent>
          <CarouselItem className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" 
                className="absolute top-0 left-0 w-full h-full object-cover object-top" 
                alt="Hero background" 
              />
            </div>
            
            <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full z-10 pt-20 mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-start mt-16 md:mt-20">
                <div className="w-full md:w-1/2">
                  <HeroContent
                    title="Arena Animation Chandigarh Sector 9"
                    description="The city's leading institute for Animation and Visual Effects (VFx) education and training. Offering career courses in Animation, Multimedia, VFx, Digital Marketing, and more."
                  />
                </div>
              </div>

              <motion.div 
                className="flex flex-wrap gap-8 md:gap-[31px] mt-16 md:mt-[66px] max-md:max-w-full justify-center z-10 mb-[90px] px-[49px] py-0 rounded-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <StatItem count="1996" label="FOUNDED" />
                <StatItem count="450,000+" label="STUDENTS" highlighted />
                <StatItem count="20+" label="COUNTRIES" />
              </motion.div>
            </div>
          </CarouselItem>

          <CarouselItem className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <img 
                src="/lovable-uploads/95a1f8bc-9c02-4b19-80f2-4c9dd67add7b.png" 
                className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75" 
                alt="VFX background" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div className="relative flex flex-col items-start justify-center h-screen max-w-[1239px] mx-auto px-4 z-10">
              <motion.h2 
                className="text-4xl md:text-6xl font-extrabold text-white mb-8 uppercase tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Sign Up for Courses
              </motion.h2>
              
              <motion.div
                className="max-w-2xl space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-xl md:text-2xl font-bold text-yellow-400">
                  Registration for 2025 Spring is now open.
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Sign up for our on-campus and online courses now.
                  The 2025 Spring term begins on April 7th, 2025.
                </p>
                
                <Button 
                  variant="primary" 
                  className="mt-8 group"
                  onClick={() => console.log("Browse Courses clicked")}
                >
                  <span>Browse Courses</span>
                  <Book className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>

          <CarouselItem className="min-h-screen relative">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-800"></div>
              <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
                    <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="url(#grad)" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
              </div>
            </div>

            <div className="relative flex flex-col items-start justify-center h-screen max-w-[1239px] mx-auto px-4 z-10">
              <motion.h2 
                className="text-4xl md:text-6xl font-extrabold text-white mb-8 uppercase tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Digital Arts Summer Camp
              </motion.h2>
              
              <motion.div
                className="max-w-2xl space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-xl md:text-2xl font-bold text-yellow-400">
                  June 16th–20th, 2025
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Discover 3D art with hands-on projects, expert instruction, and industry insights 
                  in a one-week camp—exclusively for high school students.
                </p>
                
                <Button 
                  variant="primary" 
                  className="mt-8 group"
                  onClick={() => console.log("Apply Now clicked")}
                >
                  <span>Apply Now</span>
                  <GraduationCap className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <div className="flex gap-2 items-center">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => {
                  const carousel = document.querySelector(".embla") as HTMLElement;
                  if (carousel) {
                    const emblaApi = (carousel as any).__emblaApi;
                    if (emblaApi) emblaApi.scrollTo(index);
                  }
                }}
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeSlide === index ? "w-20 bg-yellow-400" : "w-10 bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};
