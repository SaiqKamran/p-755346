
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch relative min-h-[529px] w-full text-white pt-[139px] pb-[43px] px-4 md:px-20 max-md:max-w-full max-md:pt-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/682f814612d1b649dbf855547e93b854fef6cc24?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Footer background"
      />
      <div className="relative flex flex-col md:flex-row max-w-[1200px] mx-auto w-full gap-10 justify-between">
        <div className="flex flex-col max-w-md">
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/0335d652-9f31-4a64-9bd3-fac5bad28c6c.png"
              className="h-20 object-contain"
              alt="Arena Animation Logo"
            />
            <div className="text-3xl font-extrabold tracking-wide">
              <span className="block text-white">CHANDIGARH 9</span>
            </div>
          </div>
          <div className="text-base font-normal leading-[30px] tracking-[0.64px] mt-6">
            Arena Animation Chandigarh Sector 9 is the city's leading institute for Animation and Visual Effects (VFx) education and training. The best animation institute in Chandigarh.
          </div>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-white hover:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43c.12-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.12-.56-1.34-.76-1.84c-.2-.48-.41-.41-.56-.42c-.14-.01-.31-.01-.48-.01c-.17 0-.43.06-.66.31c-.22.25-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path>
              </svg>
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
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4eceb5dbc302db944dca672230a16542574486d?placeholderIfAbsent=true"
            className="aspect-[5.29] object-contain h-8"
            alt="Security badges"
          />
        </div>
        <div>
          © Copyright 2025, All Rights Reserved by Arena Animation Chandigarh 9
        </div>
      </div>
    </footer>
  );
};
