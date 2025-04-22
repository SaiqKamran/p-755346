"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, GraduationCap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

interface Course {
  name: string;
  duration: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface CoursesProps {
  courses?: Course[];
  title?: string;
  description?: string;
}

const defaultCourses: Course[] = [
  {
    name: "Career Courses",
    duration: "1-2 Years",
    features: [
      "Animation Prime",
      "VFX Prime",
      "Broadcast Prime",
    ],
    description: "With sharp skills and the right training, you can work in animation studios, gaming companies, television channels, advertising agencies & film production companies, and have a high-paying career.",
    buttonText: "More Info",
    href: "/career-courses/professional",
    isPopular: true,
  },
  {
    name: "Professional Courses",
    duration: "4-8 Months",
    features: [
      "Graphic Designing",
      "3D Modelling with Max",
      "Rigging",
      "Compositing",
      "Rotoscopy",
    ],
    description: "Get Skilled, Get Job Ready, Get Hired!",
    buttonText: "More Info",
    href: "/career-courses/short-term",
    isPopular: false,
  },
  {
    name: "Short term Courses",
    duration: "1-3 Months",
    features: [
      "Working with Audio",
      "Web Weaver",
      "Corel Draw",
      "Photoshop",
      "Video Editing",
    ],
    description: "Perfect for quick skill enhancement and specific tool mastery",
    buttonText: "More Info",
    href: "/career-courses/specialized",
    isPopular: false,
  },
];

export function Courses({
  courses = defaultCourses,
  title = "Our Course Offerings",
  description = "Transform your creative passion into a successful career with our industry-focused animation and VFX courses",
}: CoursesProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="w-full max-w-[1200px] mt-16 mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: course.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.2,
            }}
            className={cn(
              "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col relative",
              course.isPopular && "border-yellow-400 border-2",
              !course.isPopular && "mt-5",
              "hover:border-yellow-400/50 transition-colors duration-300"
            )}
          >
            {course.isPopular && (
              <div className="absolute top-0 right-0 bg-yellow-400 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-black h-4 w-4 fill-current" />
                <span className="text-black ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-yellow-400" />
                <h3 className="text-white text-2xl font-bold">{course.name}</h3>
              </div>

              <p className="text-yellow-400 font-semibold mb-4">
                Duration: {course.duration}
              </p>

              <ul className="text-white space-y-2 list-inside mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white text-sm mb-8">
                {course.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={course.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full bg-white/5 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  )}
                >
                  {course.buttonText}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
