
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModernPlacementSection: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <div className="text-8xl lg:text-9xl font-black text-green-500">98%</div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Placement Success Rate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive placement assistance program ensures that 98% of our students secure rewarding careers in top animation studios, VFX houses, gaming companies, and digital agencies. From portfolio development to interview preparation, we guide you every step of the way to your dream job.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-3">500+</div>
            <div className="text-gray-700 font-medium">Industry Partners</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-green-600 mb-3">15,000+</div>
            <div className="text-gray-700 font-medium">Students Placed</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-3">₹8.5L</div>
            <div className="text-gray-700 font-medium">Highest Package</div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/placements"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Learn More About Placements
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
