
import React from "react";
import { SplashCursor } from "./splash-cursor";

export function SplashCursorDemo() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <SplashCursor 
        BACK_COLOR={{ r: 0.1, g: 0.0, b: 0.2 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={8000}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
        <h1 className="text-4xl font-bold">Interactive Fluid Simulation</h1>
      </div>
    </div>
  );
}
