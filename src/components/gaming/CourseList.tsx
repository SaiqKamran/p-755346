
import React from "react";
import { Card, CardContent } from "../ui/card";
import { 
  GraduationCap, 
  Video, 
  Building, 
  Tv, 
  PenTool, 
  Globe, 
  Layout, 
  Cpu, 
  Play,
  Gamepad
} from "lucide-react";
import { Button } from "./Button";
import { openWhatsAppChat } from "@/utils/whatsapp";

const courses = [
  {
    title: "AAIPP (Arena Animation International Premier Program)",
    description: "This flagship program transforms creative talent into skilled professionals capable of producing high-quality animations using industry-leading tools including Unreal Engine.",
    icon: GraduationCap,
  },
  {
    title: "Advanced Program in Visual Effects",
    description: "This comprehensive program equips students with the skills to create stunning visual effects for film, television, and digital media.",
    icon: Video,
  },
  {
    title: "Advanced Program in Architectural Visualization and Interior Design",
    description: "This program teaches students to transform architectural concepts into stunning visual presentations using cutting-edge tools and techniques.",
    icon: Building,
  },
  {
    title: "Broadcast Design",
    description: "This program focuses on creating dynamic visual content for television, film, and digital media platforms.",
    icon: Tv,
  },
  {
    title: "Digital Content Creation (DCC)",
    description: "This comprehensive program covers all aspects of digital content creation, from visual design to UI/UX and motion graphics.",
    icon: PenTool,
  },
  {
    title: "Next-Gen Graphic Design and Web Development",
    description: "This program focuses on graphic design principles and web development skills for creating engaging digital experiences.",
    icon: Globe,
  },
  {
    title: "Advanced Program in UI/UX Design",
    description: "This specialized program focuses on user interface and user experience design principles and practices.",
    icon: Layout,
  },
  {
    title: "Advanced Program in Digital Marketing with Gen AI",
    description: "This program equips students with cutting-edge digital marketing skills enhanced by artificial intelligence tools.",
    icon: Cpu,
  },
  {
    title: "Next-Gen Visual Design & Motion Graphics",
    description: "This program focuses on creating dynamic visual content through motion graphics and animation.",
    icon: Play,
  },
  {
    title: "Gaming & Interactive Design",
    description: "This comprehensive program covers all aspects of game development, including immersive technologies like AR/VR/XR.",
    icon: Gamepad,
  }
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
                <p className="text-white/80 mb-6 text-sm leading-relaxed">{course.description}</p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => {
                    const message = `Hi, I'm interested in enrolling in the ${course.title} course at Arena Animation Chandigarh. Please provide course details, fee structure, and admission process.`;
                    openWhatsAppChat(course.title, message);
                  }}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
