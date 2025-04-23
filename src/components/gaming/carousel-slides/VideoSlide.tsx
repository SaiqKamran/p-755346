
import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../Header';
import { HeroContent } from '../HeroContent';
import { StatItem } from '../StatItem';

export const VideoSlide = () => {
  const videoRef = React.useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:to-transparent before:z-10">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            ref={videoRef}
            src="https://www.youtube.com/embed/2DYRcyuL-Us?autoplay=1&mute=1&loop=1&playlist=2DYRcyuL-Us&controls=0&showinfo=0"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; encrypted-media"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.5)',
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              zIndex: -1
            }}
          />
        </div>
      </div>
      
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
    </div>
  );
};

