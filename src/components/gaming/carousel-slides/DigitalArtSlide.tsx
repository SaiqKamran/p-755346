
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const DigitalArtSlide = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/977f1b12-a4c6-4068-9878-e391fa59bf0f.png"
          alt="Digital Art Student"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Digital Art & Animation
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl font-semibold text-yellow-400">
            Master Digital Art Creation
          </p>
          <p className="text-xl bg-black/30 backdrop-blur-sm rounded-lg p-4 mx-auto max-w-2xl">
            Learn professional digital art and animation techniques using industry-standard software
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
            Start Creating <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

