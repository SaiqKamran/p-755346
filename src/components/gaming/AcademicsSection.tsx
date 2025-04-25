
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const academicSlides = [
  {
    image: "/lovable-uploads/99adef6b-13c2-477a-89fc-495fcd461a51.png",
    title: "Character Design & Animation",
    description: "Master the art of creating compelling game characters through our comprehensive program. Learn industry-standard tools and techniques for character modeling, rigging, and animation. Our expert instructors will guide you through the entire pipeline from concept to final animation.",
    courseLink: "/courses",
    feeLink: "/fees"
  },
  {
    image: "/lovable-uploads/5ff4374d-165a-4148-9a4e-b8e3c71ccdfc.png",
    title: "Advanced 3D Modeling",
    description: "Dive deep into the world of 3D modeling with our advanced course. From architectural visualization to game asset creation, learn to create stunning 3D models using industry-leading software. Develop expertise in texturing, lighting, and rendering techniques.",
    courseLink: "/courses",
    feeLink: "/fees"
  },
  {
    image: "/lovable-uploads/e5dd82e2-9be9-403f-b9eb-3f23d2e08c41.png",
    title: "Game Development",
    description: "Build your career in game development with our comprehensive program. Learn game design principles, programming fundamentals, and engine development. Create engaging gameplay mechanics and interactive experiences using modern game development tools.",
    courseLink: "/courses",
    feeLink: "/fees"
  }
];

export const AcademicsSection = () => {
  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Academics</h2>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {academicSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-[600px] object-cover rounded-lg"
                  />
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/90 to-transparent p-12 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-white mb-6">{slide.title}</h3>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">{slide.description}</p>
                    <div className="flex gap-4">
                      <Link to={slide.courseLink}>
                        <Button variant="primary">View Course</Button>
                      </Link>
                      <Link to={slide.feeLink}>
                        <Button variant="secondary">View Fees</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
