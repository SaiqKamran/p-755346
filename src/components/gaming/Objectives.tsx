
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Target } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

export const Objectives = () => {
  const objectives = [
    "The prime focus is on the work-readiness skills in each of the three years.",
    "To provide judicious mix of skills relating to a profession & appropriate content of General Education.",
    "To ensure that the students have the adequate knowledge & skills, so that they are work ready at all exit points.",
    "The Curriculum is designed with emphasis on practical work, development of student portfolios & project work.",
    "Bvoc graduates apart from meeting the needs of local and national industry are also expected to be equipped to become part of the global workforce."
  ];

  return (
    <div className="relative py-24 px-4 bg-gradient-to-b from-black via-black/95 to-black/90 overflow-hidden">
      <div className="absolute inset-0">
        <Meteors number={15} className="!from-yellow-200 !to-yellow-400" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Objectives and Benefits
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            Our program is designed to prepare you for success in the industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-yellow-500/20">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Target className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                  <p className="text-white/80">{objective}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
