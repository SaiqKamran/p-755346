
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

interface ImageCarouselProps {
  images: string[];
  autoplay?: boolean;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images,
  autoplay = true 
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplay ? [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      })
    ] : []
  );

  return (
    <div className="relative rounded-xl overflow-hidden mb-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-[0_0_100%] min-w-0 h-[300px]"
            >
              <img
                src={src}
                alt={`Course Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
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
