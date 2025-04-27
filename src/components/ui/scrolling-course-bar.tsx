
"use client"

import { Link } from "react-router-dom";
import { useRef } from "react";

const courses = [
  { name: "REAL TIME 3D", path: "/degree#3d" },
  { name: "ANIMATION", path: "/degree#animation" },
  { name: "VFX", path: "/degree#vfx" },
  { name: "GAME DEVELOPMENT", path: "/degree#gaming" },
];

// Create multiple sets to ensure seamless scrolling but reduce total number for performance
const allCourses = [...courses, ...courses, ...courses];

export const ScrollingCourseBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-hidden bg-black/30 backdrop-blur-sm border-y border-yellow-400/20">
      <div 
        ref={containerRef}
        className="animate-scroll-x py-8 flex items-center gap-12 will-change-transform transform-gpu"
      >
        {allCourses.map((course, index) => (
          <div key={index} className="flex items-center gap-6 shrink-0">
            <Link
              to={course.path}
              className="text-4xl font-black text-white hover:text-yellow-400 transition-colors whitespace-nowrap tracking-wider"
            >
              {course.name}
            </Link>
            <div className="w-6 h-6 border-2 border-yellow-400/50 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400/50 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
