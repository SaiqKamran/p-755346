
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const OverviewSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if video exists when component mounts
    const videoElement = document.createElement('video');
    videoElement.src = '/Overview.mp4';
    videoElement.onloadeddata = () => {
      setIsLoading(false);
    };
    videoElement.onerror = () => {
      setHasError(true);
      setIsLoading(false);
      console.error("Error loading video: Overview.mp4");
    };

    return () => {
      videoElement.onloadeddata = null;
      videoElement.onerror = null;
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
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
              console.error("Error loading video in video element");
            }}
          />
        )}
      </div>
    </div>
  );
};
