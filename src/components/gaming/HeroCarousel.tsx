
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./Button";

export const HeroCarousel: React.FC = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="h-screen">
        {/* Overview Panel */}
        <CarouselItem className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" 
              className="absolute top-0 left-0 w-full h-full object-cover object-top" 
              alt="Overview background" 
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase max-w-[600px] mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                VISUAL EFFECTS<br />
                GAMES &<br />
                ANIMATION
              </motion.h1>
            </div>
          </div>
        </CarouselItem>

        {/* Sign Up for Courses Panel */}
        <CarouselItem className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&ixlib=rb-4.0.3" 
              className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-50" 
              alt="Sign up background" 
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[600px]"
              >
                <h2 className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase mb-6">
                  SIGN UP FOR COURSES
                </h2>
                <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                  Registration for 2025 Spring is now open.
                  Sign up for our on-campus and online courses now.
                  The 2025 Spring term begins on April 7th, 2025.
                </p>
                <Button variant="primary" className="text-xl">Browse Courses</Button>
              </motion.div>
            </div>
          </div>
        </CarouselItem>

        {/* Digital Arts Summer Camp Panel */}
        <CarouselItem className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=3880&ixlib=rb-4.0.3" 
              className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-75" 
              alt="Summer camp background" 
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-[600px]"
              >
                <h2 className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase mb-6">
                  DIGITAL ARTS SUMMER CAMP
                </h2>
                <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                  June 16th–20th, 2025<br />
                  Discover 3D art with hands-on projects, expert instruction, 
                  and industry insights in a one-week camp—
                  exclusively for high school students.
                </p>
                <Button variant="primary" className="text-xl">Apply Now</Button>
              </motion.div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>

      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="secondary" className="px-4 py-2 text-sm">Overview</Button>
              <Button variant="secondary" className="px-4 py-2 text-sm">Sign Up for Courses</Button>
              <Button variant="secondary" className="px-4 py-2 text-sm">Digital Arts Summer Camp</Button>
            </div>
          </div>
        </div>
      </div>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-none text-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-none text-white" />
    </Carousel>
  );
};
