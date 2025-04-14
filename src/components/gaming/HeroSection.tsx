
import React, { useRef } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      {/* Absolutely positioned background image that covers entire section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" 
          className="absolute top-0 left-0 w-full h-full object-cover object-top" 
          alt="Hero background" 
        />
      </div>
      
      {/* Content with higher z-index */}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <StatItem count="1996" label="FOUNDED" />
          <StatItem count="450,000+" label="STUDENTS" highlighted />
          <StatItem count="20+" label="COUNTRIES" />
        </motion.div>
      </div>
    </section>
  );
};
