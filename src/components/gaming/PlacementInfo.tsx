
import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Building, Globe, Users, Trophy } from "lucide-react";

export const PlacementInfo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Set up a small animation effect to make the background appear moving
  useEffect(() => {
    const interval = setInterval(() => {
      if (iframeRef.current) {
        const currentScale = iframeRef.current.style.transform;
        // Toggle between two scale values to create subtle movement
        const newScale = currentScale.includes("scale(1.52)") ? "scale(1.5)" : "scale(1.52)";
        iframeRef.current.style.transform = newScale;
      }
    }, 2000); // Every 2 seconds
    
    return () => clearInterval(interval);
  }, []);

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
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <iframe 
          ref={iframeRef}
          src="https://assets.pinterest.com/ext/embed.html?id=631278072773947314" 
          height="130%" 
          width="130%" 
          frameBorder="0" 
          scrolling="no"
          title="Pinterest background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 transition-transform duration-2000"
          style={{ transform: "scale(1.5)" }}
        ></iframe>
      </div>
      
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
