
import React from "react";
import { Facebook, Instagram, Twitter, Github, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch relative min-h-[529px] w-full text-white pt-[139px] pb-[43px] px-4 md:px-20 max-md:max-w-full max-md:pt-[100px]">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/682f814612d1b649dbf855547e93b854fef6cc24?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Footer background" />
      <div className="relative flex flex-col md:flex-row max-w-[1200px] mx-auto w-full gap-10 justify-between">
        <div className="flex flex-col max-w-md">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/0cf36f02-c02f-4f45-89ce-ba7b3da769c3.png" 
              alt="Arena Animation Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          <div className="text-base font-normal leading-[30px] tracking-[0.64px] mt-6">
            Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. The best animation institute in Chandigarh.
          </div>
          <div className="flex gap-4 mt-6">
            <a 
              href="https://www.facebook.com/ArenaChandigarh9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400"
            >
              <Facebook />
            </a>
            <a 
              href="https://www.instagram.com/explore/locations/110003443885902/arena-animation/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400"
            >
              <Instagram />
            </a>
            <a 
              href="https://twitter.com/Animation_Arena" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400"
            >
              <Twitter />
            </a>
            <a 
              href="https://github.com/CourtKowaluk/ARENA-Animation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400"
            >
              <Github />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=918264900999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400"
            >
              <MessageSquare />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <nav className="flex flex-col">
            <h4 className="text-xl font-extrabold uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">Admission</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">Placements</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">FAQ</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">Degree (VFX/Gaming)</a></li>
            </ul>
          </nav>

          <nav className="flex flex-col">
            <h4 className="text-xl font-extrabold uppercase mb-6">Courses</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white hover:text-yellow-400">Animation Prime</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">VFX Prime</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">Broadcast Prime</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">Graphic Designing</a></li>
              <li><a href="#" className="text-white hover:text-yellow-400">3D Modelling</a></li>
            </ul>
          </nav>

          <nav className="flex flex-col">
            <h4 className="text-xl font-extrabold uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>SCO: 183-184 First Floor, Sector 9C, Chandigarh</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>8264 900 999</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@arenachandigarh9.com</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-4 text-sm font-normal tracking-[0.91px] leading-6 mt-16 max-w-[1200px] mx-auto w-full border-t border-white/20 pt-6">
        <div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4eceb5dbc302db944dca672230a16542574486d?placeholderIfAbsent=true" className="aspect-[5.29] object-contain h-8" alt="Security badges" />
        </div>
        <div>
          © Copyright 2025, All Rights Reserved by Arena Animation Chandigarh 9
        </div>
      </div>
    </footer>
  );
};
