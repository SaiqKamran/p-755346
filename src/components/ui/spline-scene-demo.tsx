'use client';

import React from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/gaming/Button";
import { useNavigate } from "react-router-dom";
import { openWhatsAppChat } from "@/utils/whatsapp";

export function SplineSceneDemo() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/placements');
  };

  const handleContact = () => {
    openWhatsAppChat("Training Area Inquiry");
  };

  return (
    <Card className="w-full h-[500px] bg-transparent relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="flex h-full flex-col md:flex-row">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Arena Animation has trained over <span className="text-3xl">450,000</span> students
            </h3>
            <p className="text-lg font-medium">
              for careers in the entertainment industry
            </p>
            
            <div className="flex gap-4">
              <Button variant="primary" onClick={handleLearnMore} className="mt-4 w-fit">
                Learn More
              </Button>
              <Button variant="secondary" onClick={handleContact} className="mt-4 w-fit">
                Contact Now
              </Button>
            </div>
            
            <div className="mt-6 border-t border-white/20 pt-4">
              <p className="text-sm italic text-white/70">
                *Percentage reflects the placement rate for Arena Animation Chandigarh Sector 9 graduates 
                in accordance with the national training standards recognized by the Golden Peacock Award 
                for excellence in animation education.
              </p>
              <p className="text-xs mt-2 text-white/60">
                From Forbes. ©2023 Forbes. All rights reserved. Used under license.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full" 
          />
        </div>
      </div>
    </Card>
  );
}
