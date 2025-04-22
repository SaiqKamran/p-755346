
import React from "react";
import { Card } from "@/components/ui/card";

export const CompanyGrid = () => {
  const companies = [
    {
      name: "Amazon",
      logo: "/lovable-uploads/177dc4ac-2a5c-4a60-a4f8-14dbbd5d1899.png"
    },
    {
      name: "Byju's",
      logo: "/lovable-uploads/1a5847b5-dbb9-4335-bf80-105dfde2aa78.png"
    },
    {
      name: "Dhruva Interactive",
      logo: "/lovable-uploads/158e42cc-a29f-4938-a069-5d8f1bdbc749.png"
    },
    {
      name: "Digital Domain",
      logo: "/lovable-uploads/bf8b3260-ad02-4852-8bc2-c6314511071a.png"
    },
    {
      name: "Dneg",
      logo: "/lovable-uploads/eb5e1b15-9540-4b2d-8ae0-94923ef71f6b.png"
    },
    {
      name: "DQ Entertainment",
      logo: "/lovable-uploads/25977577-3c5f-4638-9185-6e56d1f5e55c.png"
    },
    {
      name: "Eplus Studios",
      logo: "/lovable-uploads/d641a5fb-566b-4ca9-9bf8-0ec08e868d34.png"
    },
    {
      name: "Firefly Studios",
      logo: "/lovable-uploads/cd3b17e0-2ef3-4af1-96e5-eb470b8d9a1a.png"
    },
    {
      name: "Golden Robot Animation",
      logo: "/lovable-uploads/5c403dd9-fa9e-472e-935d-8bb5f08f247c.png"
    },
    {
      name: "Green Gold Animation",
      logo: "/lovable-uploads/70827f88-0162-40a6-88b2-2940482b924b.png"
    },
    {
      name: "Lakshya Digital",
      logo: "/lovable-uploads/dd065762-877c-4393-b40c-5f6033b6749e.png"
    },
    {
      name: "Legend 3D",
      logo: "/lovable-uploads/44e8859b-9338-4633-8c89-4db9278b0361.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#160f35]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Students Work At</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <Card 
              key={index} 
              className="p-4 flex flex-col items-center justify-center min-h-[120px] bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-colors gap-2"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`} 
                className="w-full h-12 object-contain mb-2"
              />
              <span className="text-white/90 font-medium text-center text-sm">{company.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
