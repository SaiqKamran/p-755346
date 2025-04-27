
import React, { useRef } from "react";
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
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();
  
  // Set all slides to 8 seconds
  const slideDurations = [8000, 8000, 8000];
  
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const moveToNextSlide = (currentIndex: number) => {
      if (currentIndex >= slideDurations.length) {
        carouselRef.current?.api?.scrollTo(0);
        return;
      }
      
      timeoutId = setTimeout(() => {
        carouselRef.current?.api?.scrollTo(currentIndex + 1);
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

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      {/* Background Video - Now outside carousel to persist */}
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

      {/* Fixed WhatsApp and Call buttons */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <button
          onClick={() => openWhatsAppChat("General Inquiry")}
          className="transition-transform hover:scale-110"
        >
          <img 
            src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
            alt="WhatsApp Us"
            className="h-16 w-auto"
          />
        </button>
        <button
          onClick={handleCall}
          className="transition-transform hover:scale-110"
        >
          <img 
            src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
            alt="Call Us"
            className="h-16 w-auto"
          />
        </button>
      </div>
      
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        ref={carouselRef}
      >
        <CarouselContent>
          {/* Main Hero Content */}
          <CarouselItem className="relative min-h-screen">
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

          {/* Game Development Slide */}
          <CarouselItem className="relative min-h-screen">
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
                  onClick={() => navigate('/degree#courses')}
                >
                  Discover Gaming Courses <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </CarouselItem>

          {/* Digital Arts Summer Camp Slide */}
          <CarouselItem className="relative min-h-screen">
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
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious className="left-8 bg-white/20 hover:bg-white/40 border-none text-white h-12 w-12" />
        <CarouselNext className="right-8 bg-white/20 hover:bg-white/40 border-none text-white h-12 w-12" />
      </Carousel>
    </section>
  );
};
