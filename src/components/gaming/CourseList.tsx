
import React from "react";
import { Card, CardContent } from "../ui/card";
import { GraduationCap, Brush, Video, MonitorPlay, Layout, Globe } from "lucide-react";
import { Button } from "./Button";

const courses = [
  {
    title: "Arena Certified Professional In Animation & VFX",
    type: "Career Course",
    icon: GraduationCap,
  },
  {
    title: "Arena Certified Professional In VFX Compositing & Editing",
    type: "Career Course",
    icon: Video,
  },
  {
    title: "Animation Prime",
    type: "Career Course",
    icon: MonitorPlay,
  },
  {
    title: "VFX Prime",
    type: "Career Course",
    icon: Video,
  },
  {
    title: "Broadcast Prime",
    type: "Career Course",
    icon: Globe,
  },
  {
    title: "Multimedia & Graphics",
    type: "Skill Course",
    icon: Brush,
  },
  {
    title: "UI-UX Design",
    type: "Skill Course",
    icon: Layout,
  },
  {
    title: "Digital Design & Marketing",
    type: "Skill Course",
    icon: Globe,
  },
];

export const CourseList = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <course.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-purple-300 mb-4">{course.type}</p>
                <Button variant="secondary" className="w-full">Enroll Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
