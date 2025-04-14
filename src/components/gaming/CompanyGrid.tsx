
import React from "react";
import { Card } from "@/components/ui/card";

export const CompanyGrid = () => {
  const companies = [
    "Amazon", "Byju's", "Dhruva Interactive", "Digital Domain", "Dneg", 
    "DQ Entertainment", "Eplus Studios", "Firefly Studios", "Golden Robot Animation",
    "Green Gold Animation", "Lakshaya Digital", "Legend 3D", "Little Red Zombies",
    "Makuta VFx", "MPC Studios", "Nazara", "Nodding Heads Games", "Philmcgi",
    "Prana Studios", "Red Chillies VFx", "Rockstar Games", "Sumo Video Games",
    "Technicolor India", "Trace VFx", "Xentrix Solutions", "YRF Studios"
  ];

  return (
    <section className="py-20 px-4 bg-[#160f35]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Students Work At</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <Card 
              key={index} 
              className="p-4 flex items-center justify-center min-h-[100px] bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-white/90 font-medium text-center">{company}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
