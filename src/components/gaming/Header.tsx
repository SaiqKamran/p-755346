
import React from "react";
import { Home, FileText, User, Mail } from "lucide-react";
import { NavBar } from "../ui/tubelight-navbar";

export const Header: React.FC = () => {
  const navItems = [
    { name: "Home", url: "#", icon: Home },
    { name: "Admission", url: "#", icon: FileText },
    { name: "Placements", url: "#", icon: FileText },
    { name: "FAQ", url: "#", icon: FileText },
    { name: "Degree", url: "/degree", icon: User },
    { name: "Contact Us", url: "#", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center text-white leading-none flex-wrap justify-between px-4 py-2 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center gap-[7px] whitespace-nowrap">
          <img 
            src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
            alt="Arena Animation Chandigarh Sector 9" 
            className="h-16 w-auto object-contain" 
          />
        </div>
        
        <NavBar items={navItems} className="hidden md:block" />

        <div className="md:hidden">
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

