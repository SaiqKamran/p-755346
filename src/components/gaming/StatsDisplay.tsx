
import React from "react";
import { Card } from "@/components/ui/card";

export const StatsDisplay = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-4xl font-bold text-yellow-400">95%</div>
        <div className="text-white mt-2">Placement Rate*</div>
      </Card>
      
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-4xl font-bold text-yellow-400">1,000+</div>
        <div className="text-white mt-2">Industry-Employed Graduates</div>
      </Card>
      
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-4xl font-bold text-yellow-400">550</div>
        <div className="text-white mt-2">Total Student Body</div>
      </Card>
      
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-4xl font-bold text-yellow-400">14</div>
        <div className="text-white mt-2">Average Class Size</div>
      </Card>
      
      <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
        <div className="text-4xl font-bold text-yellow-400">Large</div>
        <div className="text-white mt-2">Campus</div>
      </Card>
    </div>
  );
};
