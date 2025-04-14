
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Monitor, Users, Calendar, Briefcase } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Modern Labs",
    description: "Spacious labs & workstations keep students motivated & satisfied"
  },
  {
    icon: Users,
    title: "Individual Attention",
    description: "Certified faculty & lab assistance during practice hours"
  },
  {
    icon: Calendar,
    title: "Industry Events",
    description: "Regular industry visits, competitions & workshops"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Dedicated placement assistance and industry connections"
  }
];

export const AdmissionFeatures = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
