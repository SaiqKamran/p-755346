
import React from "react";
import { motion } from "framer-motion";

export const ModernSecondSection: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-yellow-400">Generative AI,</span>
                <br />
                Real-time 3D Animation & VFX
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Master the future of digital content creation with cutting-edge AI tools, real-time rendering technologies, and industry-standard VFX techniques. Create immersive experiences that captivate audiences worldwide.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">AI-Powered Creation</h3>
                <p className="text-gray-400">Generate stunning visuals and animations using cutting-edge AI technology</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Real-time Rendering</h3>
                <p className="text-gray-400">Create interactive 3D content with Unreal Engine and real-time workflows</p>
              </div>
            </motion.div>
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
              <div className="space-y-6">
                <img 
                  src="/lovable-uploads/25977577-3c5f-4638-9185-6e56d1f5e55c.png" 
                  alt="3D Animation" 
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                />
                <img 
                  src="/lovable-uploads/372396e2-aea8-40b2-ba0c-ab844d12d3fd.png" 
                  alt="VFX Work" 
                  className="w-full h-32 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img 
                  src="/lovable-uploads/5db5f36c-5a6c-438a-aa00-5728e5650b72.png" 
                  alt="Gaming Design" 
                  className="w-full h-32 object-cover rounded-2xl shadow-2xl"
                />
                <img 
                  src="/lovable-uploads/78a59bf9-ce65-4301-8e47-b7c985b45318.png" 
                  alt="Digital Art" 
                  className="w-full h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
