
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content: "When I joined Arena Animation Sector 9, I was curious about AI in design and creative tech. I wanted a place where I could actually learn hands-on. And honestly? This place exceeded every expectation. The labs are next level — modern, spacious, and seriously inspiring. Arena 9 have the highest number of computers in the entire Tricity — so there's always a system available.",
      avatarSrc: "/lovable-uploads/02566b49-2607-4ef4-b0d5-1b57cfe47f53.png",
      name: "Parmod Kumar",
      role: "AI Design Student",
      rating: 5,
      date: "4 days ago"
    },
    {
      content: "I joined arena sector 9 Institute for graphic course it's really nice, and Graphic designer with good package now I am financially independent and I want to thanks arena For this Great opportunity",
      avatarSrc: "/lovable-uploads/72e2f71b-f56b-4c5d-9644-4645afa0856b.png",
      name: "Kirashna Varma",
      role: "Graphic Design Student",
      rating: 5,
      date: "4 days ago"
    },
    {
      content: "Being a part of Arena Animation from last few months, I highly recommend this Institute for making career in Animation, Multimedia, VFX, Graphics design and many more. From my experience I can say It's a best Institute to learn these courses. Whole Arena faculty is highly experienced, interactive n cooperative.",
      avatarSrc: "/lovable-uploads/dfe52c35-1a43-415d-8f68-a98225c1aa88.png",
      name: "Zinia Gill",
      role: "Animation Student",
      rating: 5,
      date: "3 years ago"
    },
    {
      content: "One of the best institutes I have attended so far! Great animation and multimedia courses offered. I have taken the Web and Graphic Designing course and it really helped me to enhance my creative skills. Overall, the experience and knowledge gained is worth the time and money.",
      avatarSrc: "/lovable-uploads/23451786-6485-4768-8a76-53befcd5cb6a.png",
      name: "Ayushi Jain",
      role: "Web Design Student",
      rating: 5,
      date: "2 years ago"
    },
    {
      content: "Best institute with good faculty and great atmosphere is friendly and comfortable and the education are dedicated and cooperative. Big thumbs up 👍👍",
      avatarSrc: "/lovable-uploads/f5fb0529-7420-4f21-b796-ab6c9c0841aa.png",
      name: "Sumit Sahu",
      role: "Current Student",
      rating: 5,
      date: "7 months ago"
    }
  ];

  return (
    <section className="py-16 overflow-hidden relative">
      {/* Gaming texture background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("/lovable-uploads/8eb8219c-9593-4745-874f-ab44635fc001.png")'
        }}
      />
      {/* Purple overlay */}
      <div className="absolute inset-0 z-0 bg-indigo-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Student Testimonials</h2>
        
        <div className="relative">
          <div className="flex animate-scroll-x">
            {/* First set of testimonials */}
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={`first-${index}`} className="w-[400px] flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            
            {/* Second set for seamless loop */}
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={`second-${index}`} className="w-[400px] flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {/* Third set for extra buffer */}
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={`third-${index}`} className="w-[400px] flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
