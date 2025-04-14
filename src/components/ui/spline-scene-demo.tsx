
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneDemo() {
  return (
    <Card className="w-full h-[500px] bg-transparent relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="flex h-full items-center justify-center">
        {/* Center content */}
        <div className="w-full max-w-[800px] mx-auto relative">
          {/* Blackish overlay effect */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10 rounded-lg pointer-events-none"></div>
          
          {/* 3D model */}
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full relative" 
          />
        </div>
      </div>
    </Card>
  );
}
