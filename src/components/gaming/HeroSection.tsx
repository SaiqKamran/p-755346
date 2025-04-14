
import React from "react";
import { Button } from "./Button";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
export const HeroSection: React.FC = () => {
  return <section className="flex flex-col self-stretch relative min-h-[917px] w-full items-stretch pt-14 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Hero background" />
      <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full">
        <Header />

        <div className="flex flex-col md:flex-row justify-between items-start mt-16 md:mt-20 px-4">
          <div className="w-full md:w-1/2">
            <h1 className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase max-w-[579px] max-md:max-w-full max-md:text-4xl max-md:leading-tight">
              Arena Animation Chandigarh Sector 9
            </h1>
            <p className="text-white text-lg md:text-[19px] font-normal leading-[35px] tracking-[0.75px] max-w-[602px] mt-4 max-md:max-w-full">
              The city's leading institute for Animation and Visual Effects (VFx) education and training. Offering career courses in Animation, Multimedia, VFx, Digital Marketing, and more.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch text-xl font-extrabold uppercase tracking-[0.8px] leading-none mt-8 gap-4">
              <Button variant="primary">Get Course Info</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>

          
        </div>

        <div className="flex flex-wrap gap-8 md:gap-[31px] mt-16 md:mt-[66px] max-md:max-w-full justify-center z-10 mb-[90px] px-[49px] py-0 rounded-none">
          <StatItem count="1996" label="FOUNDED" />
          <StatItem count="450,000+" label="STUDENTS" highlighted />
          <StatItem count="20+" label="COUNTRIES" />
        </div>
      </div>
    </section>;
};
