
import React from "react";
import { ModernHeader } from "./ModernHeader";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import { openWhatsAppChat } from "@/utils/whatsapp";

export const ModernHeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    openWhatsAppChat("General Inquiry");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/57968b39-1059-4557-bb86-a1f477f2cdf5.png" 
          alt="Animation Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>
      
      <ModernHeader />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl lg:text-8xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                WE MAKE
                <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text">
                  CAREERS
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Arena Animation Chandigarh Sector 9: #1 Animation institute for 3D Animation, VFX, Gaming with real-time projects to master the skills in demand.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                GET FREE DEMO
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-200"
              >
                <img 
                  src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
                  alt="WhatsApp"
                  className="h-6 w-6"
                />
                Chat with Expert
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400">1996</div>
                <div className="text-gray-400 font-medium">FOUNDED</div>
              </div>
              <div className="text-center border-x border-white/20 px-4">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400">450,000+</div>
                <div className="text-gray-400 font-medium">STUDENTS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400">20+</div>
                <div className="text-gray-400 font-medium">COUNTRIES</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
