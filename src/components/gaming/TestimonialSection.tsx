
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "Arena Chandigarh provided an amazing experience for my son's birthday party. The gaming setup was fantastic, and the staff was incredibly helpful in organizing everything. All the kids had a blast, and the party room was perfect for the celebration. We'll definitely be returning for future events!",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93fbd035a360d965855e9df06d5d3fd0e05961b2?placeholderIfAbsent=true",
      name: "Rajan Sharma",
      company: "Birthday Party",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f9d61f26074169e407c578bd796c521853b89a5?placeholderIfAbsent=true",
    },
    {
      content:
        "We hosted our company's team-building event at Arena Chandigarh and it was a huge success. The staff was professional and accommodating, the facilities were excellent, and everyone enjoyed the gaming competitions. The venue has a great ambiance and the catering options were delicious. Highly recommended for corporate events!",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dafa45290ac6eca1324bf83a757ab9e8ad835e7e?placeholderIfAbsent=true",
      name: "Priya Kapoor",
      company: "Corporate Event",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5089c3ff035d5dbc53b0b36cfd66e482b308a88?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-[1245px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-6/12 max-md:w-full max-md:ml-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/556baeb13bc2087e937458e9a46c5622f0cb39ee?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-7 mt-[78px] rounded-[50%] max-md:mt-10"
        alt="Decorative dot"
      />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0c27a76c025f54c0ff21e8ec9025da8ae4d8965?placeholderIfAbsent=true"
        className="aspect-[15.87] object-contain w-full self-stretch z-10 mt-[103px] max-md:max-w-full max-md:mt-10"
        alt="Decorative element"
      />
    </section>
  );
};
