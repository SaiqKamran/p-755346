import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      content:
        "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93fbd035a360d965855e9df06d5d3fd0e05961b2?placeholderIfAbsent=true",
      name: "Arlene McCoy",
      company: "McDonald's",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f9d61f26074169e407c578bd796c521853b89a5?placeholderIfAbsent=true",
    },
    {
      content:
        "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dafa45290ac6eca1324bf83a757ab9e8ad835e7e?placeholderIfAbsent=true",
      name: "Kathryn Murphy",
      company: "General Electric",
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
