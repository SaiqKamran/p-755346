
import React from "react";
import { Card } from "@/components/ui/card";
import { Building, Globe, Users, Trophy } from "lucide-react";

export const PlacementInfo = () => {
  const reasons = [
    {
      icon: Users,
      title: "English Speaking Workforce",
      description: "A large pool of English-speaking professionals ready for global projects"
    },
    {
      icon: Trophy,
      title: "Talented Professionals",
      description: "Arena Animation contributes significantly to India's growing talent pool"
    },
    {
      icon: Building,
      title: "Industry Recognition",
      description: "Work on major projects like Finding Nemo, The Lion King, and Avatar"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Competing with companies from China, Philippines, South Korea, and Taiwan"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{minHeight: "700px"}}>
      {/* Background image with full opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/lovable-uploads/06e9f8e9-6acb-4530-9cb8-186dc98315b0.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />
      
      {/* Darker overlay to ensure text readability */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-black"
        style={{
          opacity: 0.6,
        }}
      />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Animation Industry Jobs</h2>
          <p className="text-white/80 leading-relaxed mb-8">
            The animation industry sector is growing rapidly in India, with International houses such as Imax, Walt Disney and Sony outsourcing their character animations and VFx requirements to India. There are also a huge number of International companies outsourcing their commercials, video game content and mobile content to Indian animation and VFx companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-6 bg-white/5 backdrop-blur-lg border-white/10">
              <reason.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-white/70">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
