
import React from "react";
import { Button } from "./Button";

export const LocationSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 py-20 bg-indigo-900/50">
      <h2 className="text-white text-4xl md:text-[66px] font-extrabold leading-tight tracking-[2.64px] text-center uppercase max-w-[718px] mb-12">
        Location and Parking
      </h2>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h3 className="text-white text-2xl font-bold mb-6">Arena Animation Chandigarh 9 Institute Address</h3>
          <p className="text-white text-lg mb-4">
            SCO: 183-184 First Floor<br />
            Sector 9C<br />
            Chandigarh<br />
            India
          </p>
          <p className="text-white">Phone: 0172-4037958, 8264 900 999</p>
          
          <h3 className="text-white text-2xl font-bold mt-8 mb-4">Landmark</h3>
          <ul className="text-white space-y-2 list-disc list-inside">
            <li>Near Garewal Eye Institute</li>
            <li>Below Bodyzone Gym</li>
          </ul>
          
          <h3 className="text-white text-2xl font-bold mt-8 mb-4">Hours</h3>
          <p className="text-white">
            Monday - Saturday<br />
            09:30 am - 7:30 pm
          </p>
          
          <div className="mt-8">
            <Button variant="primary">
              8264 900 999
            </Button>
            <p className="text-white mt-2 text-sm">Get course information on Whatsapp now</p>
          </div>
        </div>
        
        <div className="h-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.9761344667065!2d76.7839!3d30.7404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed87bc5a01f9%3A0xe3c3d2c5e23c47da!2sSector%209%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1713192140973!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mt-16">
        <h3 className="text-white text-3xl font-bold text-center mb-10">Take the Next Step</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <h4 className="text-white text-xl font-bold mb-4">CONTACT THE COUNSELLOR</h4>
            <Button variant="primary">Call Now</Button>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <h4 className="text-white text-xl font-bold mb-4">NOW ACCEPTING APPLICANTS</h4>
            <Button variant="primary">Apply Now</Button>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <h4 className="text-white text-xl font-bold mb-4">ADMISSION PROCEDURE</h4>
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
