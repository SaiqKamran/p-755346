import React from "react";
import { Button } from "./Button";
import { StatItem } from "./StatItem";
import { Header } from "./Header";
export const HeroSection: React.FC = () => {
  return <section className="flex flex-col self-stretch relative min-h-[917px] w-full items-stretch pt-14 max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/035acd8c83f372da62c47ee0517293e00e602a6a?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Hero background" />
      <div className="relative self-center flex w-full max-w-[1239px] flex-col max-md:max-w-full">
        <Header />

        <div className="text-white text-[69px] font-extrabold leading-[76px] tracking-[2.76px] uppercase w-[579px] mt-[119px] max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] max-md:mt-10">
          The Best Arena in Chandigarh
        </div>
        <div className="text-white text-[19px] font-normal leading-[35px] tracking-[0.75px] w-[602px] mt-3.5 max-md:max-w-full">
          Welcome to Arena Chandigarh, where excitement meets entertainment. Experience the thrill of gaming, parties, and events in our state-of-the-art venue in Chandigarh.
        </div>

        <div className="flex items-stretch text-xl font-extrabold uppercase tracking-[0.8px] leading-none mt-[33px]">
          <Button variant="primary">Book Now</Button>
          <Button variant="secondary">Contact Us</Button>
        </div>

        <div className="flex gap-[31px] mt-[66px] max-md:max-w-full max-md:mt-10">
          <StatItem count="100+" label="Events Hosted" />
          <StatItem count="1000+" label="Happy Customers" highlighted />
          <StatItem count="5+" label="Years Experience" />
        </div>
      </div>

      
    </section>;
};