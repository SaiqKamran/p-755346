
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Award } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export const CareerOptions = () => {
  const careers = [
    "3D Modeler",
    "3D Animator",
    "Rigging Artist",
    "Texturing Artist",
    "Lighting Artist",
    "Rendering Artist",
    "Compositor",
    "Illustrator",
    "Storyboard Artist",
    "Video Editor",
    "Graphic Designer"
  ];

  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-black via-black/95 to-black/90 overflow-hidden">
      <div className="absolute inset-0">
        <Meteors number={15} className="!from-yellow-200 !to-yellow-400" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Career Options
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Explore diverse career opportunities in the animation and gaming industry
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {careers.map((career) => (
            <Card key={career} className="bg-black/40 backdrop-blur-sm border-yellow-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-white font-medium">{career}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
