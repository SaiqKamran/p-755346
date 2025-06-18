
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({
  items,
  className
}: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    // Set active tab based on current location
    const matchingItem = items.find(item => item.url === location.pathname);
    if (matchingItem) {
      setActiveTab(matchingItem.name);
    }
  }, [location.pathname, items]);

  return (
    <nav className={cn("w-full bg-black/90 backdrop-blur-lg border-b border-white/10 px-8 py-6", className)}>
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo Section - Above text */}
        <div className="flex flex-col items-center space-y-3">
          <Link to="/" className="flex flex-col items-center space-y-3">
            <img 
              src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
              alt="Arena Animation Chandigarh Sector 9" 
              className="h-20 w-auto object-contain" 
            />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-3xl">ARENA ANIMATION</span>
              <span className="text-yellow-400 text-lg font-medium">Sector 9 Chandigarh</span>
            </div>
          </Link>
        </div>

        {/* Navigation Items - Modern flat design */}
        <div className="flex items-center space-x-8">
          {items.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-yellow-400"
                )}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Icon size={16} />
                  <span>{item.name}</span>
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="p-2 text-white hover:text-yellow-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
