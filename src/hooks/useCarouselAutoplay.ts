
import { useEffect, useState, useRef } from 'react';

export const useCarouselAutoplay = (slideDurations: number[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeouts when the current slide changes manually
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const moveToNextSlide = (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % slideDurations.length;
      
      timeoutRef.current = setTimeout(() => {
        if (carouselRef.current?.api?.scrollTo) {
          carouselRef.current.api.scrollTo(nextIndex);
          setCurrentSlide(nextIndex);
        }
        moveToNextSlide(nextIndex);
      }, slideDurations[currentIndex]);
    };
    
    // Start the autoplay from the current slide
    moveToNextSlide(currentSlide);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, slideDurations]);

  return {
    currentSlide,
    carouselRef,
    setCurrentSlide,
  };
};
