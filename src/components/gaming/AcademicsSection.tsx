
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
    description: "Master the art of creating compelling game characters",
    courseLink: "/courses",
    feeLink: "/fees"
  },
  {
    image: "/lovable-uploads/5ff4374d-165a-4148-9a4e-b8e3c71ccdfc.png",
    title: "Advanced 3D Modeling",
    description: "Learn professional 3D modeling techniques",
    courseLink: "/courses",
    feeLink: "/fees"
  },
  {
    image: "/lovable-uploads/e5dd82e2-9be9-403f-b9eb-3f23d2e08c41.png",
    title: "Game Development",
    description: "Create immersive gaming experiences",
    courseLink: "/courses",
    feeLink: "/fees"
  }
];

export const AcademicsSection = () => {
  return (
    <section className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Academics</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {academicSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative group">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-[600px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                      <p className="text-white/80 mb-6">{slide.description}</p>
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
