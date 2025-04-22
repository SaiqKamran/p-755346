
import React from "react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { Courses } from "@/components/ui/courses";

interface CareerCoursesDetailProps {
  category: "professional" | "short-term" | "specialized";
}

const CareerCoursesDetail: React.FC<CareerCoursesDetailProps> = ({ category }) => {
  const courseTitles = {
    "professional": "Professional Courses",
    "short-term": "Short Term Courses",
    "specialized": "Specialized Courses"
  };

  const courseDescriptions = {
    "professional": "Enhance your skills with our professional courses designed to make you job-ready.",
    "short-term": "Quick, focused learning paths to boost your career in specific domains.",
    "specialized": "Targeted courses for niche skills and advanced professional development."
  };

  return (
    <div className="min-h-screen bg-[#1b1240]">
      <SplashCursor 
        BACK_COLOR={{ r: 0.05, g: 0.0, b: 0.1 }}
        CURL={20}
        COLOR_UPDATE_SPEED={5}
        SPLAT_RADIUS={0.3}
        SPLAT_FORCE={6000}
      />
      <div className="max-w-[1400px] mx-auto">
        <Header />
      </div>
      <div className="py-12 px-4">
        <Courses 
          title={courseTitles[category]} 
          description={courseDescriptions[category]} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default CareerCoursesDetail;
