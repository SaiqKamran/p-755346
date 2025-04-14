
import React from "react";
import { Card, CardContent } from "../ui/card";
import { GraduationCap } from "lucide-react";

export const DegreeInfo = () => {
  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be A Skilled Graduate with B.Voc Degree
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto">
            A B.Voc Graduate can apply for any Government job that asks for a Graduation Degree in any discipline as an eligibility criteria.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-purple-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Jaganath University</h3>
              </div>
              <p className="text-white/80">
                Get Job ready skills with B.Voc. degree, a 3 year full time program from J N University in association with Arena Animation at sector 9 (Pkl.)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-purple-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Degree Status</h3>
              </div>
              <p className="text-white/80">
                B.Voc is equivalent to any other Bachelor's Degree of 3 Years and is recognized by the University Grants Commission (UGC).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
