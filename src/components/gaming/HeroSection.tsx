import React, { useRef } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slideDurations = [47000, 10000, 10000]; // Duration for each slide in milliseconds
  
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const moveToNextSlide = (currentIndex: number) => {
      if (currentIndex >= slideDurations.length) {
        // Stop at overview page after completing the cycle
        carouselRef.current?.scrollTo(0);
        return;
      }
      
      timeoutId = setTimeout(() => {
        carouselRef.current?.scrollTo(currentIndex + 1);
        setCurrentSlide(currentIndex + 1);
        moveToNextSlide(currentIndex + 1);
      }, slideDurations[currentIndex]);
    };
    
    moveToNextSlide(0);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    carouselRef.current?.scrollTo(index);
  };
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: false,
        }}
        ref={carouselRef}
      >
        <CarouselContent>
          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-10">
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  ref={videoRef}
                  src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&loop=1&playlist=2DYRcyuL-Us&controls=0&showinfo=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(1.5)',
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                    zIndex: -1
                  }}
                />
              </div>
            </div>
            
            <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full z-20 pt-14">
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

          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Gaming Setup"
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
                Professional VFX Training
              </motion.h2>
              <motion.div 
                className="max-w-3xl mx-auto space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-semibold text-yellow-400">
                  Learn Industry-Standard VFX Tools
                </p>
                <p className="text-xl">
                  Master the art of visual effects with our comprehensive courses
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
                  Explore VFX Courses <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>

          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Gaming Character"
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
                Game Development & Design
              </motion.h2>
              <motion.div 
                className="max-w-3xl mx-auto space-y-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-2xl font-semibold text-yellow-400">
                  Create Immersive Gaming Experiences
                </p>
                <p className="text-xl">
                  From concept to creation, learn game development with cutting-edge tools
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
                  Discover Gaming Courses <ChevronRight className="ml-2" />
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
