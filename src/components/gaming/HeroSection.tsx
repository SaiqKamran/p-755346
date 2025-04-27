import React, { useRef, useEffect, useState } from "react";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsAppChat } from "@/utils/whatsapp";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideDurations = [8000, 8000, 8000]; // 8 seconds for each slide
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const moveToNextSlide = (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % slideDurations.length;
      
      timeoutId = setTimeout(() => {
        if (carouselRef.current?.api) {
          carouselRef.current.api.scrollTo(nextIndex);
          setCurrentSlide(nextIndex);
        }
        moveToNextSlide(nextIndex);
      }, slideDurations[currentIndex]);
    };
    
    moveToNextSlide(currentSlide);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentSlide]);

  useEffect(() => {
    const api = carouselRef.current?.api;
    
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, []);

  const handleSlideClick = (index: number) => {
    if (carouselRef.current?.api) {
      carouselRef.current.api.scrollTo(index);
      setCurrentSlide(index);
    }
  };

  const navigate = useNavigate();

  const handleExploreCourses = () => {
    navigate('/degree#courses');
  };

  const handleWhatsAppClick = (context: string) => {
    openWhatsAppChat(context);
  };

  const handleCallClick = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        ref={carouselRef}
      >
        <CarouselContent>
          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-10">
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&loop=1&playlist=2DYRcyuL-Us&controls=0&showinfo=0&rel=0&vq=hd1080&modestbranding=1&playsinline=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-full h-full object-cover scale-150"
                  style={{ border: 'none' }}
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
              <iframe
                src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&loop=1&playlist=2DYRcyuL-Us&controls=0&showinfo=0&rel=0&vq=hd1080&modestbranding=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-full h-full object-cover scale-150"
                style={{ border: 'none', opacity: 0.8 }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
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
                  onClick={handleExploreCourses}
                >
                  Discover Gaming Courses <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => handleWhatsAppClick("Game Development Inquiry")}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
                    alt="WhatsApp Us"
                    className="h-12 w-auto"
                  />
                </button>
                <button
                  onClick={handleCallClick}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
                    alt="Call Us"
                    className="h-12 w-auto"
                  />
                </button>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="relative min-h-screen">
            <div className="absolute inset-0">
              <iframe
                src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&loop=1&playlist=2DYRcyuL-Us&controls=0&showinfo=0&rel=0&vq=hd1080&modestbranding=1&playsinline=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-full h-full object-cover scale-150"
                style={{ border: 'none', opacity: 0.8 }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
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
                  Unleash Your Creativity This Summer
                </p>
                <p className="text-xl">
                  Join our specialized program for students aged 8-18 to explore digital art, 3D modeling, and animation
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 rounded-full"
                  onClick={() => navigate('/admission')}
                >
                  Enroll Now <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => handleWhatsAppClick("Summer Camp Inquiry")}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
                    alt="WhatsApp Us"
                    className="h-12 w-auto"
                  />
                </button>
                <button
                  onClick={handleCallClick}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
                    alt="Call Us"
                    className="h-12 w-auto"
                  />
                </button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`h-3 w-20 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-yellow-400" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>
    </section>
  );
};
