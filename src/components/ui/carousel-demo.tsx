
"use client";
import { Carousel } from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Arena Animation Excellence",
      button: "Learn More",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e5e55e5416882388ed16d5453ac50b1437907ac",
    },
    {
      title: "State-of-the-art Infrastructure",
      button: "Discover Facilities",
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    },
    {
      title: "Creative Learning Environment",
      button: "Explore Courses",
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-8">
      <Carousel slides={slideData} />
    </div>
  );
}
