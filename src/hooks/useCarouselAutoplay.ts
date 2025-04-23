
import { useEffect, useState, useRef } from 'react';

export const useCarouselAutoplay = (slideDurations: number[]) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const moveToNextSlide = (currentIndex: number) => {
      if (currentIndex >= slideDurations.length) {
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
  }, [slideDurations]);

  return {
    currentSlide,
    carouselRef,
    setCurrentSlide,
  };
};

