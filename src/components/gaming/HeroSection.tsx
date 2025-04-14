
import React, { useRef, useState, useCallback } from "react";
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
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      loop: true 
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      })
    ]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  
  const slides = [
    {
      background: "https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true",
      title: "Arena Animation Chandigarh Sector 9",
      description: "The city's leading institute for Animation and Visual Effects (VFx) education and training. Offering career courses in Animation, Multimedia, VFx, Digital Marketing, and more.",
      buttonText: "Get Course Info",
      showStats: true
    },
    {
      background: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Professional VFX Training",
      description: "Learn Industry-Standard VFX Tools and master the art of visual effects with our comprehensive courses",
      buttonText: "Explore VFX Courses",
      highlightText: "Learn Industry-Standard VFX Tools"
    },
    {
      background: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Game Development & Design",
      description: "From concept to creation, learn game development with cutting-edge tools",
      buttonText: "Discover Gaming Courses",
      highlightText: "Create Immersive Gaming Experiences"
    }
  ];
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden" ref={heroRef}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide relative min-h-screen w-full" key={index}>
              <div className="absolute inset-0">
                <img 
                  src={slide.background} 
                  className="absolute top-0 left-0 w-full h-full object-cover object-top" 
                  alt={`Hero slide ${index + 1}`} 
                />
              </div>
              
              <div className="relative w-full max-w-[1239px] mx-auto flex flex-col h-full z-10 pt-14">
                <Header />
                
                <div className="flex flex-col md:flex-row justify-between items-start mt-16 md:mt-20 px-4 flex-grow">
                  <div className="w-full md:w-1/2">
                    {index === 0 ? (
                      <HeroContent
                        title={slide.title}
                        description={slide.description}
                      />
                    ) : (
                      <div className="flex flex-col items-start justify-center h-full px-4 text-white">
                        <motion.h2 
                          className="text-4xl md:text-6xl font-bold mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {slide.title}
                        </motion.h2>
                        <motion.div 
                          className="max-w-3xl space-y-4 mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <p className="text-2xl font-semibold text-yellow-400">
                            {slide.highlightText}
                          </p>
                          <p className="text-xl">
                            {slide.description}
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
                            {slide.buttonText} <ChevronRight className="ml-2" />
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>

                {slide.showStats && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-36 left-0 right-0 flex justify-center items-center gap-8 z-50">
        {[
          { name: "Overview", index: 0 },
          { name: "VFX Training", index: 1 },
          { name: "Game Development", index: 2 }
        ].map(({ name, index }) => (
          <div key={index} className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => scrollTo(index)}>
            <div className="flex items-center space-x-2">
              <div 
                className={`h-1 w-8 transition-all ${selectedIndex === index ? "bg-yellow-400" : "bg-white/30"}`}
              />
              <button
                className={`w-4 h-4 rounded-full transition-all ${
                  selectedIndex === index 
                    ? "bg-yellow-400 scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to ${name} slide`}
              />
              <div 
                className={`h-1 w-8 transition-all ${selectedIndex === index ? "bg-yellow-400" : "bg-white/30"}`}
              />
            </div>
            <span 
              className={`text-sm font-medium transition-colors text-center ${
                selectedIndex === index 
                  ? "text-white" 
                  : "text-white/50"
              }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Previous/Next buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-30"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronRight className="h-6 w-6 rotate-180" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-30"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
};
