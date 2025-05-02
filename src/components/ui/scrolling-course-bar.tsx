
"use client"

import { Link } from "react-router-dom";
import { useRef } from "react";

const courses = [
  { name: "REAL TIME 3D", path: "/degree#3d" },
  { name: "ANIMATION", path: "/degree#animation" },
  { name: "VFX", path: "/degree#vfx" },
  { name: "GAME DEVELOPMENT", path: "/degree#gaming" },
];

// Duplicate courses to create a continuous scroll effect
const allCourses = [...courses, ...courses, ...courses];

export const ScrollingCourseBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="py-12 flex items-center gap-24 animate-scroll-x"
      >
        {allCourses.map((course, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <Link
              to={course.path}
              className="text-6xl font-black text-white hover:text-yellow-400 transition-colors whitespace-nowrap tracking-wider"
            >
              {course.name}
            </Link>
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-400/50 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
