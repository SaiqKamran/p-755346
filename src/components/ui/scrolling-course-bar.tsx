
"use client"

import { Link } from "react-router-dom";
import { useRef } from "react";

const courses = [
  { name: "REAL TIME 3D", path: "/degree#3d" },
  { name: "ANIMATION", path: "/degree#animation" },
  { name: "VFX", path: "/degree#vfx" },
  { name: "GAME DEVELOPMENT", path: "/degree#gaming" },
];

// Create a complete set that will be repeated three times to ensure seamless scrolling
const allCourses = [...courses, ...courses, ...courses];

export const ScrollingCourseBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-hidden bg-black/30 backdrop-blur-sm border-y border-yellow-400/20">
      <div 
        ref={containerRef}
        className="animate-scroll-x py-4 flex items-center gap-8"
      >
        {allCourses.map((course, index) => (
          <div key={index} className="flex items-center gap-4 shrink-0">
            <Link
              to={course.path}
              className="text-xl font-bold text-white hover:text-yellow-400 transition-colors whitespace-nowrap"
            >
              {course.name}
            </Link>
            <div className="w-4 h-4 border border-yellow-400/50 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-yellow-400/50 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
