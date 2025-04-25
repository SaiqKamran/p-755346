
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
      <div className="relative w-full aspect-video rounded-lg border-4 border-yellow-400 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Skeleton className="w-full h-full bg-gray-800/50" />
            <span className="absolute text-yellow-400 animate-pulse">Loading video...</span>
          </div>
        )}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <p className="text-yellow-400 text-xl font-medium">Video could not be loaded</p>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
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
        )}
      </div>
    </div>
  );
};
