
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Phone } from "lucide-react";
import { Header } from "@/components/gaming/Header";
import { Footer } from "@/components/gaming/Footer";
import { MeteorDemo } from "@/components/ui/meteor-demo";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { openWhatsAppChat } from "@/utils/whatsapp";

const courses = [
  {
    title: "AAIPP",
    description: "Arena Animation International Premier Program - Transform creative talent into skilled animation professionals using Unreal Engine",
  },
  {
    title: "Advanced VFX",
    description: "Master stunning visual effects creation for film, television, and digital media",
  },
  {
    title: "ArchViz",
    description: "Transform architectural concepts into stunning visual presentations with cutting-edge tools",
  },
  {
    title: "Broadcast Design",
    description: "Create dynamic visual content for television, film, and digital media platforms",
  },
  {
    title: "Digital Content Creation",
    description: "Master all aspects of digital content creation, from visual design to UI/UX and motion graphics",
  },
  {
    title: "Next-Gen Graphic Design & Web",
    description: "Learn graphic design principles and web development for engaging digital experiences",
  },
  {
    title: "Advanced UI/UX Design",
    description: "Master user interface and user experience design principles and practices",
  },
  {
    title: "Digital Marketing with Gen AI",
    description: "Learn cutting-edge digital marketing enhanced with artificial intelligence tools",
  },
  {
    title: "Visual Design & Motion Graphics",
    description: "Create dynamic visual content through motion graphics and animation",
  },
  {
    title: "Gaming & Interactive Design",
    description: "Master game development including AR/VR/XR technologies",
  },
  {
    title: "Custom Course",
    description: "Get a personalized course plan based on your needs",
  }
];

const Fees = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[rgba(45,30,107,1)] relative" ref={containerRef}>
      <Header />
      <MeteorDemo />
      
      <div className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <TextCursorProximity
              label="Fee Details & Plans"
              containerRef={containerRef}
              styles={{
                fontSize: { from: "3rem", to: "3.25rem" },
                color: { from: "white", to: "#8B5CF6" }
              }}
              className="text-4xl font-bold text-white mb-4 animate-fade-in"
            />
            <p className="text-white/80 text-lg animate-fade-in delay-100">
              Get detailed information about our course fees and flexible payment plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.title} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-white">{course.title}</CardTitle>
                  <CardDescription className="text-white/70">{course.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => openWhatsAppChat(course.title)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Fee Details on WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/20 text-black bg-white hover:bg-white/90"
                    onClick={() => window.location.href = "/contact"}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Enquiry
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 animate-fade-in"
              onClick={() => window.open("/contact")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Request Complete Fee Structure
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Fees;
