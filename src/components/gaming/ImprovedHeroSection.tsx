
import React, { useRef, useEffect, useState } from "react";
import { StatItem } from "./StatItem";
import { ImprovedHeader } from "./ImprovedHeader";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroContent";
import { ContactForm } from "./ContactForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsAppChat } from "@/utils/whatsapp";

export const ImprovedHeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideDurations = [10000, 10000, 10000];
  
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
      {/* Enhanced Background with Graphics */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-black"></div>
        
        {/* Academic Images Background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/372396e2-aea8-40b2-ba0c-ab844d12d3fd.png" 
            alt="Graphics" 
            className="absolute top-0 left-0 w-1/3 h-1/2 object-cover"
          />
          <img 
            src="/lovable-uploads/44e8859b-9338-4633-8c89-4db9278b0361.png" 
            alt="Graphics" 
            className="absolute top-0 right-0 w-1/3 h-1/2 object-cover"
          />
          <img 
            src="/lovable-uploads/5bfd0aec-b53b-4f2e-a24c-b6d77742b171.png" 
            alt="Graphics" 
            className="absolute bottom-0 left-1/4 w-1/2 h-1/2 object-cover"
          />
        </div>
        
        {/* Enhanced YouTube Video Background */}
        <iframe
          src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=2DYRcyuL-Us&modestbranding=1&iv_load_policy=3&enablejsapi=1&vq=hd1080"
          className="absolute w-full h-full object-cover scale-150"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
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
          {/* First Slide - Main Hero */}
          <CarouselItem className="relative min-h-screen">
            <div className="relative z-20 max-w-7xl mx-auto px-6 pt-6">
              <ImprovedHeader />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 min-h-[calc(100vh-200px)]">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                      Arena Animation
                      <span className="block text-4xl md:text-5xl text-yellow-400 font-normal">
                        Chandigarh Sector 9
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                      Leading institute for Animation, VFX, Gaming, and Digital Arts education. 
                      Transform your creativity into a successful career with industry-relevant training.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={handleExploreCourses}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-bold px-8 py-4 text-lg rounded-full"
                    >
                      Explore Courses <ChevronRight className="ml-2" />
                    </Button>
                    <Button 
                      onClick={() => navigate('/admission')}
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-full"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Button>
                  </div>
                </motion.div>
                
                {/* Right Content - Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="lg:pl-8"
                >
                  <ContactForm />
                </motion.div>
              </div>

              {/* Stats Section */}
              <motion.div 
                className="flex flex-wrap justify-center gap-12 md:gap-16 mt-20 pb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1.2 }}
              >
                <StatItem count="1996" label="FOUNDED" />
                <StatItem count="450,000+" label="STUDENTS" highlighted />
                <StatItem count="20+" label="COUNTRIES" />
                <StatItem count="100%" label="PLACEMENT ASSISTANCE" />
              </motion.div>
            </div>
          </CarouselItem>

          {/* Second Slide - Generative AI & 3D Animation */}
          <CarouselItem className="relative min-h-screen">
            <div className="relative z-20 max-w-7xl mx-auto px-6 pt-6">
              <ImprovedHeader />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 min-h-[calc(100vh-200px)]">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                      <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Generative AI
                      </span>
                      <span className="block text-4xl md:text-5xl">
                        Real-Time 3D Animation & VFX
                      </span>
                    </h2>
                    <p className="text-xl text-white/90 leading-relaxed">
                      Master the future of digital content creation with AI-powered tools and real-time 3D animation. 
                      Create stunning visuals that were once impossible.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <img src="/lovable-uploads/372396e2-aea8-40b2-ba0c-ab844d12d3fd.png" alt="AI Animation" className="w-full h-32 object-cover rounded-lg mb-4" />
                      <h3 className="text-white font-semibold text-lg">AI Animation</h3>
                      <p className="text-white/80 text-sm">Create animations using AI</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <img src="/lovable-uploads/44e8859b-9338-4633-8c89-4db9278b0361.png" alt="Real-time VFX" className="w-full h-32 object-cover rounded-lg mb-4" />
                      <h3 className="text-white font-semibold text-lg">Real-time VFX</h3>
                      <p className="text-white/80 text-sm">Industry-standard techniques</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full"
                    onClick={() => navigate('/degree#gen-ai')}
                  >
                    Discover AI Courses <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/5bfd0aec-b53b-4f2e-a24c-b6d77742b171.png" 
                    alt="3D Animation Work" 
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </CarouselItem>

          {/* Third Slide - Digital Arts Summer Camp */}
          <CarouselItem className="relative min-h-screen">
            <div className="relative z-20 max-w-7xl mx-auto px-6 pt-6">
              <ImprovedHeader />
              
              <div className="flex flex-col items-center justify-center text-center mt-16 min-h-[calc(100vh-200px)] space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6 max-w-4xl"
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Digital Arts Summer Camp
                  </h2>
                  <p className="text-2xl font-semibold text-yellow-400 mb-4">
                    Unleash Your Creativity This Summer
                  </p>
                  <p className="text-xl text-white/90 leading-relaxed">
                    Join our specialized program for students aged 8-18 to explore digital art, 3D modeling, and animation
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-6 justify-center"
                >
                  <Button 
                    className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-4 text-lg rounded-full"
                    onClick={() => navigate('/admission')}
                  >
                    Enroll Now <ChevronRight className="ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-full"
                    onClick={() => handleWhatsAppClick("Summer Camp Inquiry")}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center gap-4">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => {
                if (carouselRef.current?.api) {
                  carouselRef.current.api.scrollTo(index);
                  setCurrentSlide(index);
                }
              }}
              className={`h-3 w-20 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-yellow-400" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-6 bg-black/50 hover:bg-black/70 border-none text-white backdrop-blur-sm" />
        <CarouselNext className="right-6 bg-black/50 hover:bg-black/70 border-none text-white backdrop-blur-sm" />
      </Carousel>
    </section>
  );
};
