
"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

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
  courses: Course[];
  title?: string;
  description?: string;
}

export function Courses({
  courses,
  title = "Our Courses",
  description = "Transform your career with our industry-leading courses in Animation, VFX, and Digital Media",
}: CoursesProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          {title}
        </h2>
        <p className="text-white/70 text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: course.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl p-6 bg-white/5 backdrop-blur-sm border text-center lg:flex lg:flex-col lg:justify-center relative`,
              course.isPopular ? "border-yellow-400 border-2" : "border-white/10",
              "flex flex-col",
              !course.isPopular && "mt-5"
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
              <p className="text-base font-semibold text-white">
                {course.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-xl font-semibold text-white">
                  {course.duration}
                </span>
              </div>

              <ul className="mt-5 gap-2 flex flex-col">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white">
                    <Check className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-4 border-white/10" />

              <button
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu transition-all duration-300 ease-out",
                  "bg-yellow-400 text-black hover:bg-yellow-500"
                )}
              >
                {course.buttonText}
              </button>
              <p className="mt-6 text-xs leading-5 text-white/70">
                {course.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
