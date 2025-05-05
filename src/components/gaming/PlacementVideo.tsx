
import React from "react";

export const PlacementVideo = () => {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-xl">
          {/* Glowing gradient outline */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-xl opacity-75 blur-[5px] animate-pulse"></div>
          
          {/* Video container */}
          <div className="relative rounded-xl overflow-hidden border-2 border-white/10 z-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Animation Career Showcase</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get a glimpse of the exciting world of animation and gaming careers waiting for you after graduation. Our students work on cutting-edge projects across multiple industries.
          </p>
        </div>
      </div>
    </section>
  );
};
