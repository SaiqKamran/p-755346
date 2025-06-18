
import React from "react";
import { motion } from "framer-motion";

export const ModernCoursesSection: React.FC = () => {
  const courses = [
    {
      title: "Advanced Program in Animation",
      description: "Master 3D character animation, rigging, and storytelling with industry-standard tools",
      image: "/lovable-uploads/25977577-3c5f-4638-9185-6e56d1f5e55c.png",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "VFX & Compositing",
      description: "Create stunning visual effects for films, TV shows, and digital media",
      image: "/lovable-uploads/372396e2-aea8-40b2-ba0c-ab844d12d3fd.png",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Game Design & Development",
      description: "Build immersive gaming experiences with cutting-edge game engines",
      image: "/lovable-uploads/5db5f36c-5a6c-438a-aa00-5728e5650b72.png",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Course Offerings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-aligned curriculum designed to make you job-ready from day one
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{course.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
