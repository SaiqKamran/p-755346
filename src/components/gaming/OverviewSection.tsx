
import React from "react";

export const OverviewSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1240px] mt-32 relative z-10">
      <h2 className="text-white text-4xl font-extrabold mb-12 uppercase tracking-wider text-center">
        Arena Animation Overview
      </h2>
      <div className="relative w-full aspect-video rounded-lg border-4 border-yellow-400 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/Overview.mp4"
          controls
          playsInline
        />
      </div>
    </div>
  );
};
