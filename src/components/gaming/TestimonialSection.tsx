
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content: "Arena Chandigarh provided an amazing experience for my son's birthday party. The gaming setup was fantastic, and the staff was incredibly helpful in organizing everything. All the kids had a blast, and the party room was perfect for the celebration. We'll definitely be returning for future events!",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93fbd035a360d965855e9df06d5d3fd0e05961b2?placeholderIfAbsent=true",
      name: "Rajan Sharma",
      company: "Birthday Party",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f9d61f26074169e407c578bd796c521853b89a5?placeholderIfAbsent=true"
    },
    {
      content: "We hosted our company's team-building event at Arena Chandigarh and it was a huge success. The staff was professional and accommodating, the facilities were excellent, and everyone enjoyed the gaming competitions. The venue has a great ambiance and the catering options were delicious. Highly recommended for corporate events!",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dafa45290ac6eca1324bf83a757ab9e8ad835e7e?placeholderIfAbsent=true",
      name: "Priya Kapoor",
      company: "Corporate Event",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5089c3ff035d5dbc53b0b36cfd66e482b308a88?placeholderIfAbsent=true"
    },
    // Duplicate testimonials to create continuous effect
    {
      content: "The animation courses at Arena are outstanding! The instructors are industry professionals who bring real-world experience to the classroom. I've learned so much about 3D modeling and character design.",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93fbd035a360d965855e9df06d5d3fd0e05961b2?placeholderIfAbsent=true",
      name: "Amit Verma",
      company: "Animation Student",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f9d61f26074169e407c578bd796c521853b89a5?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="py-16 bg-indigo-900/50 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-12">What Our Students Say</h2>
      
      <div className="relative">
        <div className="flex animate-scroll-x">
          {/* First set of testimonials */}
          <div className="flex gap-6 min-w-full">
            {testimonials.map((testimonial, index) => (
              <div key={`first-${index}`} className="w-[400px] flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless scrolling */}
          <div className="flex gap-6 min-w-full">
            {testimonials.map((testimonial, index) => (
              <div key={`second-${index}`} className="w-[400px] flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
