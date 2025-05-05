
import React from "react";

export const CareerShowcase = () => {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Career Showcase</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10">
            Discover the exciting career opportunities that await you in the creative industry. Our graduates work in top studios around the world.
          </p>
        </div>
        
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
              <source src="/video5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Shape Your Future in Animation</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join our community of creative professionals and build a rewarding career in animation, 
            game development, visual effects, and more. Our industry connections help you land your dream job.
          </p>
        </div>
      </div>
    </section>
  );
};
