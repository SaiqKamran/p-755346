
import React, { useRef, useEffect } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { Carousel } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const slides = [
    {
      title: "Arena Animation Chandigarh Sector 9",
      button: "Explore Now",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true"
    },
    {
      title: "Professional VFX Training",
      button: "Explore VFX Courses",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Game Development & Design",
      button: "Discover Gaming Courses",
      src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0">
        <Carousel slides={slides} />
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
    </section>
  );
};
