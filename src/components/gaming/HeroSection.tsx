
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";
import { VideoSlide } from "./carousel-slides/VideoSlide";
import { DigitalArtSlide } from "./carousel-slides/DigitalArtSlide";
import { GameDevSlide } from "./carousel-slides/GameDevSlide";

export const HeroSection: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const slideDurations = [47000, 10000, 10000];
  
  const { currentSlide, carouselRef, setCurrentSlide } = useCarouselAutoplay(slideDurations);

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    // Make sure the carousel API is available before calling scrollTo
    if (carouselRef.current?.scrollTo) {
      carouselRef.current.scrollTo(index);
    } else if (carouselRef.current) {
      // If the scrollTo method is not directly available, try to access it through the API
      const api = carouselRef.current as any;
      if (api.scrollTo) {
        api.scrollTo(index);
      } else if (api.api && api.api.scrollTo) {
        api.api.scrollTo(index);
      }
    }
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
        onSelect={(index) => setCurrentSlide(index)}
      >
        <CarouselContent>
          <CarouselItem>
            <VideoSlide />
          </CarouselItem>

          <CarouselItem>
            <DigitalArtSlide />
          </CarouselItem>

          <CarouselItem>
            <GameDevSlide />
          </CarouselItem>
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>

      <div className="absolute bottom-16 left-0 right-0 flex justify-center items-center gap-8 z-50">
        {[
          { name: "Overview", index: 0 },
          { name: "Sign Up for Courses", index: 1 },
          { name: "Digital Arts Summer Camp", index: 2 }
        ].map(({ name, index }) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <div 
                className={`h-1 w-8 transition-all ${
                  currentSlide === index 
                    ? "bg-yellow-400" 
                    : "bg-white/30"
                }`}
              />
              <button
                className={`w-4 h-4 rounded-full transition-all cursor-pointer ${
                  currentSlide === index 
                    ? "bg-yellow-400 scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => handleSlideClick(index)}
                aria-label={`Go to ${name} slide`}
              />
              <div 
                className={`h-1 w-8 transition-all ${
                  currentSlide === index 
                    ? "bg-yellow-400" 
                    : "bg-white/30"
                }`}
              />
            </div>
            <span 
              className={`text-sm font-medium transition-colors text-center ${
                currentSlide === index 
                  ? "text-white" 
                  : "text-white/50"
              }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
