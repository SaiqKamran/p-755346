import React, { useRef } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      {/* Absolutely positioned background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(45,30,107,0.8)] to-[rgba(45,30,107,0.6)]"></div>
      
      {/* Content with higher z-index */}
      <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full z-10 pt-14">
        <Header />

        <div className="mt-10 md:mt-14 px-2 md:px-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* First Slide - Overview */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-full">
                <div className="relative min-h-[70vh] w-full rounded-xl overflow-hidden">
                  {/* Keep the existing background image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" 
                      className="absolute top-0 left-0 w-full h-full object-cover object-top"
                      alt="Hero background" 
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full justify-center p-6 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                      <div className="w-full md:w-1/2">
                        <HeroContent
                          title="Arena Animation Chandigarh Sector 9"
                          description="The city's leading institute for Animation and Visual Effects (VFx) education and training. Offering career courses in Animation, Multimedia, VFx, Digital Marketing, and more."
                        />
                      </div>
                    </div>

                    <motion.div 
                      className="flex flex-wrap gap-8 md:gap-[31px] mt-16 md:mt-[66px] max-md:max-w-full justify-center z-10 mb-[40px] px-[49px] py-0 rounded-none"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <StatItem count="1996" label="FOUNDED" />
                      <StatItem count="450,000+" label="STUDENTS" highlighted />
                      <StatItem count="20+" label="COUNTRIES" />
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>

              {/* Second Slide - Sign Up */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-full">
                <div className="relative min-h-[70vh] w-full rounded-xl overflow-hidden bg-indigo-900">
                  {/* Background Pattern for Sign Up section */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format" 
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
                      alt="Sign up background" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 via-indigo-800/80 to-indigo-700/60 mix-blend-multiply"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full justify-center p-6 md:p-12">
                    <motion.div 
                      className="max-w-2xl mx-auto text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-5xl md:text-[60px] font-extrabold text-white uppercase mb-6 leading-tight tracking-tight">
                        Sign Up for Courses
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                        Registration for 2025 Spring is now open. Sign up for our on-campus and online courses now. 
                        The 2025 Spring term begins on April 7th, 2025.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Button variant="primary">Browse Courses</Button>
                        <div className="text-white text-lg font-medium">Registration for Spring 2025 is Open</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>

              {/* Third Slide - Digital Arts Summer Camp */}
              <CarouselItem className="pl-2 md:pl-4 md:basis-full">
                <div className="relative min-h-[70vh] w-full rounded-xl overflow-hidden bg-purple-900">
                  {/* Background for Summer Camp */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format" 
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                      alt="Digital arts background" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/90 via-purple-800/80 to-indigo-900/70 mix-blend-multiply"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full justify-center p-6 md:p-12">
                    <motion.div 
                      className="max-w-2xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-5xl md:text-[60px] font-extrabold text-white uppercase mb-4 leading-tight tracking-tight">
                        Digital Arts<br/>Summer Camp
                      </h2>
                      <p className="text-yellow-400 text-2xl font-bold mb-4">
                        June 16th–20th, 2025
                      </p>
                      <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                        Discover 3D art with hands-on projects, expert instruction, and industry insights in a one-week 
                        camp—exclusively for high school students.
                      </p>
                      <Button variant="primary">Apply Now</Button>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious className="left-4 lg:left-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/10">
              <ChevronLeft className="h-6 w-6"/>
            </CarouselPrevious>
            <CarouselNext className="right-4 lg:right-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/10">
              <ChevronRight className="h-6 w-6"/>
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
