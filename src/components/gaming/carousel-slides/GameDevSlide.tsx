
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const GameDevSlide = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Gaming Character"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Game Development & Design
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-2xl font-semibold text-yellow-400">
            Create Immersive Gaming Experiences
          </p>
          <p className="text-xl">
            From concept to creation, learn game development with cutting-edge tools
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
            Discover Gaming Courses <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

