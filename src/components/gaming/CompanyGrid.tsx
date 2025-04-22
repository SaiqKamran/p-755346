import React from "react";
import { Card } from "@/components/ui/card";

export const CompanyGrid = () => {
  const companies = [
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Byju's",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Dhruva Interactive",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Digital Domain",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Dneg",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "DQ Entertainment",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Eplus Studios",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Firefly Studios",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Golden Robot Animation",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Green Gold Animation",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Lakshaya Digital",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Legend 3D",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Little Red Zombies",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Makuta VFx",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "MPC Studios",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Nazara",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Nodding Heads Games",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Philmcgi",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Prana Studios",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Red Chillies VFx",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Rockstar Games",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Sumo Video Games",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Technicolor India",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Trace VFx",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "Xentrix Solutions",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "YRF Studios",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format"
    }
  ].map(company => ({
    ...company,
    logo: company.logo || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&auto=format"
  }));

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
                className="w-full h-12 object-contain mb-2 filter brightness-0 invert opacity-80"
              />
              <span className="text-white/90 font-medium text-center text-sm">{company.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
