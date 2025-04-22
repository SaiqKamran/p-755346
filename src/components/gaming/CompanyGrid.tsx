
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
    },
    {
      name: "Makuta Visual Effects",
      logo: "/lovable-uploads/78a59bf9-ce65-4301-8e47-b7c985b45318.png"
    },
    {
      name: "MPC Studios",
      logo: "/lovable-uploads/2a8658df-e606-40fe-a33e-ea0ec13b9383.png"
    },
    {
      name: "Nazara",
      logo: "/lovable-uploads/a716a7a6-ba47-4420-8eeb-889dd5163ab4.png"
    },
    {
      name: "Ora",
      logo: "/lovable-uploads/c6af7217-6f0c-4f63-8716-3d8d8c964fff.png"
    },
    {
      name: "Philm CGI",
      logo: "/lovable-uploads/219c80ed-3aa0-4f0f-8745-0062338d2cbc.png"
    },
    {
      name: "Prana",
      logo: "/lovable-uploads/e828610a-0f43-4ff4-b11e-15e4a5cb0966.png"
    },
    {
      name: "Red Chillies Entertainment",
      logo: "/lovable-uploads/586bdca3-3243-422d-9edf-2b648d0d8c3b.png"
    },
    {
      name: "Rockstar Games",
      logo: "/lovable-uploads/03698727-281d-472e-8495-a29eb6d07f8e.png"
    },
    {
      name: "Sumo Digital",
      logo: "/lovable-uploads/8eb8219c-9593-4745-874f-ab44635fc001.png"
    },
    {
      name: "Technicolor",
      logo: "/lovable-uploads/372396e2-aea8-40b2-ba0c-ab844d12d3fd.png"
    },
    {
      name: "Trace",
      logo: "/lovable-uploads/5bfd0aec-b53b-4f2e-a24c-b6d77742b171.png"
    },
    {
      name: "Xentrix Solutions",
      logo: "/lovable-uploads/0a3032ef-1987-46ac-9e72-cbdcdd638bb6.png"
    },
    {
      name: "Yash Raj Films",
      logo: "/lovable-uploads/0450a98d-06f1-4c92-96ac-e7e10baf9d40.png"
    },
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
