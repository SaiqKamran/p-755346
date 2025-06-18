
import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { CourseFeeModal } from "./CourseFeeModal";

export const ModernHeader: React.FC = () => {
  const [showCourseFeeModal, setShowCourseFeeModal] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <>
      <header className="w-full bg-black/90 backdrop-blur-sm border-b border-white/10 py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png" 
                alt="Arena Animation Chandigarh Sector 9" 
                className="h-20 w-auto object-contain" 
              />
              <div className="text-white">
                <div className="text-xl font-bold">ARENA ANIMATION</div>
                <div className="text-sm text-yellow-400">CHANDIGARH SECTOR 9</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Home
            </Link>
            <Link to="/degree" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Courses
            </Link>
            <Link to="/degree#gen-ai" className="text-white hover:text-yellow-400 font-medium transition-colors">
              GEN AI Courses
            </Link>
            <Link to="/placements" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Placements
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCall}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Phone size={18} />
              Call Us Now
            </button>
            <div className="relative group">
              <button
                onClick={() => setShowCourseFeeModal(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105"
              >
                Course Fee
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Get the fee plan on your WhatsApp now
              </div>
            </div>
          </div>
        </div>
      </header>

      <CourseFeeModal 
        isOpen={showCourseFeeModal} 
        onClose={() => setShowCourseFeeModal(false)} 
      />
    </>
  );
};
