
import React from "react";
import { HeroSection } from "@/components/gaming/HeroSection";
import { GameShowcase } from "@/components/gaming/GameShowcase";
import { FeatureSection } from "@/components/gaming/FeatureSection";
import { LocationSection } from "@/components/gaming/LocationSection";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { TextCursorProximityDemo } from "@/components/ui/text-cursor-proximity-demo";
import { TestimonialSection } from "@/components/gaming/TestimonialSection";
import { HomeNewsSection } from "@/components/gaming/HomeNewsSection";
import { AcademicsSection } from "@/components/gaming/AcademicsSection";
import { motion } from "framer-motion";
import { ScrollingCourseBar } from "@/components/ui/scrolling-course-bar";

const Index = () => {
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 60 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="bg-[#0F0F0F] flex flex-col overflow-hidden items-center rounded-[10px] relative">
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-black/70 to-transparent z-0" />
      
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="relative w-full">
        <ScrollingCourseBar />
        
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }}>
          <HeroSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <GameShowcase />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <FeatureSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <AcademicsSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <TestimonialSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <HomeNewsSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <LocationSection />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <TextCursorProximityDemo />
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }}>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
