
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';

const images = [
  "/lovable-uploads/5db5f36c-5a6c-438a-aa00-5728e5650b72.png",
  "/lovable-uploads/3730923e-bb5c-4373-a7f3-1ba8671c9659.png",
];

export const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="relative">
      <div className="border-4 border-yellow-400 rounded-lg overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative flex-[0_0_100%] min-w-0 aspect-square"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={() => emblaApi?.scrollNext()}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
