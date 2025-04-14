
import React, { useRef } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <Carousel className="w-full">
        <CarouselContent>
          {/* Slide 1: Original Content */}
          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" 
                className="absolute top-0 left-0 w-full h-full object-cover object-top" 
                alt="Hero background" 
              />
            </div>
            
            <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full z-10 pt-14">
              <Header />
              <div className="flex flex-col md:flex-row justify-between items-start mt-16 md:mt-20 px-4">
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

          {/* Slide 2: Sign Up for Courses */}
          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80" />
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="https://cdn.lovable.dev/assets/vfx-reel.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Sign Up for Courses
              </motion.h2>
              <motion.div 
                className="max-w-3xl mx-auto space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-semibold text-yellow-400">
                  Registration for 2025 Spring is now open
                </p>
                <p className="text-xl">
                  Sign up for our on-campus and online courses now
                </p>
                <p className="text-lg text-gray-300">
                  The 2025 Spring term begins on April 7th, 2025
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 rounded-full"
                >
                  Browse Courses <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>

          {/* Slide 3: Digital Arts Summer Camp */}
          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80" />
              <img 
                src="https://cdn.lovable.dev/assets/digital-arts-camp.jpg" 
                alt="Digital Arts Summer Camp"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Digital Arts Summer Camp
              </motion.h2>
              <motion.div 
                className="max-w-3xl mx-auto space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-semibold text-yellow-400">
                  June 16th–20th, 2025
                </p>
                <p className="text-xl max-w-2xl mx-auto">
                  Discover 3D art with hands-on projects, expert instruction, and industry insights 
                  in a one-week camp—exclusively for high school students.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 rounded-full"
                >
                  Apply Now <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>
    </section>
  );
};
