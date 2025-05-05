
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const images = [
  "/lovable-uploads/5db5f36c-5a6c-438a-aa00-5728e5650b72.png",
  "/lovable-uploads/3730923e-bb5c-4373-a7f3-1ba8671c9659.png",
];

export const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="relative space-y-8">
      <motion.div 
        className="rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(8,112,184,0.6)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden bg-gradient-to-br from-black to-gray-900 p-0.5 rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative flex-[0_0_100%] min-w-0 aspect-square"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 pointer-events-none rounded-lg" style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(0,0,0,0) 100%)",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
                }} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      
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

      {/* Featured Video Section */}
      <motion.div
        className="rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(8,112,184,0.6)] mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/xBfPqtzZ1sw?autoplay=1&loop=1&playlist=xBfPqtzZ1sw&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&hd=1"
            title="Arena Animation Featured Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};
