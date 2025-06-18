
import React from "react";
import { motion } from "framer-motion";

export const ModernLabsSection: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <div className="text-8xl lg:text-9xl font-black text-yellow-400 mb-4">4</div>
              <div className="text-3xl lg:text-4xl font-bold text-white">Computer Labs</div>
              <p className="text-xl text-gray-300 mt-4">
                State-of-the-art facilities equipped with the latest hardware and software
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="text-8xl lg:text-9xl font-black text-green-400 mb-4">100%</div>
              <div className="text-3xl lg:text-4xl font-bold text-white">Placement Assistance</div>
              <p className="text-xl text-gray-300 mt-4">
                Comprehensive career support from portfolio building to job placement
              </p>
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/lovable-uploads/78a59bf9-ce65-4301-8e47-b7c985b45318.png" 
                alt="Computer Lab" 
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
              <img 
                src="/lovable-uploads/5ff4374d-165a-4148-9a4e-b8e3c71ccdfc.png" 
                alt="Students Working" 
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
              <img 
                src="/lovable-uploads/70827f88-0162-40a6-88b2-2940482b924b.png" 
                alt="Lab Equipment" 
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
              <img 
                src="/lovable-uploads/99adef6b-13c2-477a-89fc-495fcd461a51.png" 
                alt="Training Session" 
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
