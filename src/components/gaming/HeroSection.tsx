import React from "react";
import { Button } from "./Button";
import { StatItem } from "./StatItem";
import { Header } from "./Header";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[917px] w-full items-stretch pt-14 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full">
        <Header />

        <div className="text-white text-[69px] font-extrabold leading-[76px] tracking-[2.76px] uppercase w-[579px] mt-[119px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] max-md:mt-10">
          Let your mind explore new world
        </div>
        <div className="text-white text-[19px] font-normal leading-[35px] tracking-[0.75px] w-[602px] mt-3.5 max-md:max-w-full">
          Playing electronic games, whether through consoles, computers, mobile
          phones or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </div>

        <div className="flex items-stretch text-xl font-extrabold uppercase tracking-[0.8px] leading-none mt-[33px]">
          <Button variant="primary">Buy now</Button>
          <Button variant="secondary">Play now</Button>
        </div>

        <div className="flex gap-[31px] mt-[66px] max-md:max-w-full max-md:mt-10">
          <StatItem count="300+" label="Unique style" />
          <StatItem count="200+" label="Project finished" highlighted />
          <StatItem count="500+" label="Happy customer" />
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78455bffd8994934382ff0bc3226d9656fecce17?placeholderIfAbsent=true"
        className="aspect-[9.9] object-contain w-full z-10 mb-[-51px] mt-[19px] max-md:max-w-full max-md:mb-2.5"
        alt="Decorative element"
      />
    </section>
  );
};
