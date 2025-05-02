
import React from "react";
import { Home, FileText, User, Mail, DollarSign, Newspaper, BriefcaseBusiness } from "lucide-react";
import { NavBar } from "../ui/tubelight-navbar";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Admission", url: "/admission", icon: FileText },
    { name: "Placements", url: "/placements", icon: FileText },
    { name: "Courses", url: "/degree", icon: User },
    { name: "Fees", url: "/fees", icon: DollarSign },
    { name: "News&Events", url: "/news", icon: Newspaper },
    { name: "Contact", url: "/contact", icon: Mail },
    { name: "Hire From Us", url: "/hirefromus", icon: BriefcaseBusiness },
    { name: "FAQ", url: "/faq", icon: FileText },
  ];

  return (
    <header className="self-stretch flex w-full max-w-[1239px] flex-col max-md:max-w-full">
      <nav className="self-stretch flex items-center text-white leading-none flex-wrap justify-between max-md:max-w-full px-4">
        <div className="self-stretch flex items-center gap-[7px] whitespace-nowrap">
          <Link to="/">
            <img 
              src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
              alt="Arena Animation Chandigarh Sector 9" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
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
