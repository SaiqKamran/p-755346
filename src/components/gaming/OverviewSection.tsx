
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export const OverviewSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if video exists when component mounts
    const videoElement = document.createElement('video');
    videoElement.src = '/Overview.mp4';
    videoElement.preload = 'auto';
    
    // Force video to start loading immediately
    videoElement.load();
    
    // Set a timeout to check if video is loading properly
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log("Video loading timeout reached, forcing state update");
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout
    
    videoElement.onloadeddata = () => {
      console.log("Video loaded successfully");
      setIsLoading(false);
      clearTimeout(timeoutId);
    };
    
    videoElement.onerror = (e) => {
      console.error("Error loading video:", e);
      setHasError(true);
      setIsLoading(false);
      clearTimeout(timeoutId);
    };

    return () => {
      videoElement.onloadeddata = null;
      videoElement.onerror = null;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full max-w-[1240px] mt-32 relative z-10">
      <h2 className="text-white text-4xl font-extrabold mb-12 uppercase tracking-wider text-center">
        Arena Animation Overview
      </h2>
      <motion.div 
        className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.7)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm">
            <Skeleton className="w-full h-full bg-gray-800/30" />
            <span className="absolute text-blue-400 animate-pulse">Loading video...</span>
          </div>
        )}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <p className="text-blue-400 text-xl font-medium">Video could not be loaded</p>
          </div>
        ) : (
          <div className="relative w-full h-full bg-gradient-to-br from-black to-gray-900 p-1">
            <video
              className="w-full h-full object-cover rounded-lg"
              src="/Overview.mp4"
              controls
              playsInline
              preload="auto"
              autoPlay={false}
              muted={false}
              onLoadedData={() => {
                console.log("Video element loaded data");
                setIsLoading(false);
              }}
              onCanPlay={() => {
                console.log("Video can play now");
                setIsLoading(false);
              }}
              onError={(e) => {
                console.error("Error in video element:", e);
                setHasError(true);
                setIsLoading(false);
              }}
            />
            <div className="absolute inset-0 pointer-events-none rounded-lg" style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 100%)",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)"
            }} />
          </div>
        )}
      </motion.div>
    </div>
  );
};
