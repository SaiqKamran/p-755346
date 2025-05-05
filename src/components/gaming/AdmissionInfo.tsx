
import React from "react";
import { Card, CardContent } from "../ui/card";
import { BadgeIndianRupee, GraduationCap, Users } from "lucide-react";

export const AdmissionInfo = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background GIF with overlay for text readability */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/placement (2).gif" 
          alt="Career animation" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70 z-[1]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Admission Information</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 text-white/80">
            <p className="text-lg">
              Please spare 20-25 minutes and visit the institute to meet your Career Advisor. Your advisor will guide you to choose the right skill/Career Courses and provide complete information on course content, student work, showreels, placements, fees, and events.
            </p>
            <p className="text-lg">
              Students can take up individual skill courses or apply for admission to Career Courses in Graphics, Animation, VFX and more. All applicants are required to meet a Career advisor to better understand their expectations and explain the scope & potential of our courses.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="bg-black/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 flex gap-4">
                <BadgeIndianRupee className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Financial Aid</h3>
                  <p className="text-white/80">Financial aid is available to applicants/students. Visit the institute or call us for more information.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/30 backdrop-blur-sm border-white/10">
              <CardContent className="p-6 flex gap-4">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scholarships</h3>
                  <p className="text-white/80">Our Scholarship Programme offers fee discounts based on merit. Details explained during counselling.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
