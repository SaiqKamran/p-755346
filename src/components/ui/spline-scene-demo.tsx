'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/gaming/Button";
export function SplineSceneDemo() {
  return <Card className="w-full h-[500px] bg-transparent relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Arena Animation has trained over <span className="text-3xl">450,000</span> students
            </h3>
            <p className="text-lg font-medium">
              for careers in the entertainment industry
            </p>
            
            <Button variant="primary" className="mt-4 w-fit">
              Learn More
            </Button>
            
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="text-sm italic text-slate-50">
                *Percentage reflects the placement rate for Arena Animation Chandigarh Sector 9 graduates 
                in accordance with the national training standards recognized by the Golden Peacock Award 
                for excellence in animation education.
              </p>
              <p className="text-xs mt-2 text-slate-50">
                From Forbes. ©2023 Forbes. All rights reserved. Used under license.
              </p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>;
}