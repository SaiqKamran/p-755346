
import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const OverviewSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        <video
          className="w-full h-full object-cover"
          src="/Overview.mp4"
          controls
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};
