
import React, { useState } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { CourseFeeModal } from "./CourseFeeModal";

export const ImprovedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "Admission", url: "/admission" },
    { name: "Placements", url: "/placements" },
    { name: "Courses", url: "/degree" },
    { name: "GEN AI Courses", url: "/degree#gen-ai", highlight: true },
    { name: "News & Events", url: "/news" },
    { name: "Contact", url: "/contact" },
    { name: "Hire From Us", url: "/hirefromus" },
    { name: "FAQ", url: "/faq" },
  ];

  return (
    <>
      <header className="w-full bg-black/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
              alt="Arena Animation Chandigarh Sector 9" 
              className="h-20 w-auto object-contain" 
            />
            <div className="ml-3 text-white">
              <div className="text-lg font-bold">Arena Animation</div>
              <div className="text-sm text-yellow-400">Sector 9, Chandigarh</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  item.highlight 
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700" 
                    : "text-white hover:bg-white/10 hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={() => setIsFeeModalOpen(true)}
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-6 py-2 relative group"
            >
              Course Fee
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Get fee plan on WhatsApp now
              </div>
            </Button>
            
            <button
              onClick={handleCall}
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
                alt="Call Us"
                className="h-12 w-auto"
              />
            </button>
            
            <button
              onClick={() => openWhatsAppChat("General Inquiry")}
              className="transition-transform hover:scale-105"
            >
              <img 
                src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
                alt="WhatsApp Us"
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                    item.highlight 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white" 
                      : "text-white hover:bg-white/10 hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex flex-col space-y-3 mt-4">
              <Button
                onClick={() => {
                  setIsFeeModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
              >
                Course Fee
              </Button>
              
              <div className="flex space-x-3 justify-center">
                <button
                  onClick={handleCall}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
                    alt="Call Us"
                    className="h-10 w-auto"
                  />
                </button>
                
                <button
                  onClick={() => openWhatsAppChat("General Inquiry")}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
                    alt="WhatsApp Us"
                    className="h-10 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <CourseFeeModal 
        isOpen={isFeeModalOpen} 
        onClose={() => setIsFeeModalOpen(false)} 
      />
    </>
  );
};
