
import React, { useRef } from "react";
import { Button } from "./Button";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

export const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="flex flex-col items-center px-4 py-12 bg-black/50" ref={sectionRef}>
      <TextCursorProximity 
        label="Location and Parking"
        styles={{
          transform: {
            from: "scale(1)",
            to: "scale(1.3)"
          },
          color: {
            from: "#FFFFFF",
            to: "#FFD700"
          }
        }} 
        falloff="gaussian" 
        radius={200} 
        containerRef={sectionRef} 
        className="text-white text-4xl font-bold leading-tight tracking-[2.64px] text-center uppercase mb-8" 
      />

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full">
          <h3 className="text-white text-2xl font-bold mb-6">Arena Animation Chandigarh 9 Institute Address</h3>
          <p className="text-white text-lg mb-4">
            SCO: 183-184 First Floor<br />
            Sector 9C<br />
            Chandigarh<br />
            India
          </p>
          <p className="text-white mb-6">Phone: 0172-4037958, 8264 900 999</p>
          
          <h3 className="text-white text-xl font-bold mt-6 mb-3">Landmark</h3>
          <ul className="text-white space-y-2 list-disc list-inside mb-6">
            <li>Near Garewal Eye Institute</li>
            <li>Below Bodyzone Gym</li>
          </ul>
          
          <h3 className="text-white text-xl font-bold mb-3">Hours</h3>
          <p className="text-white mb-6">
            Monday - Saturday<br />
            09:30 am - 7:30 pm
          </p>
          
          <div>
            <Button variant="primary">
              8264 900 999
            </Button>
            <p className="text-white mt-2 text-sm">Get course information on Whatsapp now</p>
          </div>
        </div>
        
        <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6858.3547183840265!2d76.7907761!3d30.7415192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feddaf470031b%3A0x72d6ed21e686107f!2sArena%20Animation%20Sector%209%20Chandigarh!5e0!3m2!1sen!2sin!4v1744673963271!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
