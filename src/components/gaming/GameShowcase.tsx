
import React from "react";
import { Button } from "./Button";

export const GameShowcase: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-white text-[66px] font-extrabold leading-[77px] tracking-[2.64px] text-center uppercase w-[718px] mt-[137px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px] max-md:mt-10">
        Our Premium Services
      </h2>
      <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] text-center w-[518px] mt-3 max-md:max-w-full">
        Explore our range of premium services designed to make your events memorable. From gaming experiences to party venues, we have it all.
      </p>

      <div className="self-stretch w-full mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[24%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1744c72ca772157c962a3112b75db403d46d0bd2?placeholderIfAbsent=true"
              className="aspect-[0.91] object-contain w-[335px] shrink-0 max-w-full mt-[89px] max-md:mt-10"
              alt="Gaming events"
            />
          </div>
          <div className="w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[494px] grow items-center text-[28px] text-white font-extrabold uppercase tracking-[1.12px] leading-none pt-[26px] pb-2 px-20 max-md:max-w-full max-md:mt-[30px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2bf206ef3ee8753846571b223408242ea5d863d?placeholderIfAbsent=true"
                className="absolute h-full w-full object-cover inset-0"
                alt="Featured service background"
              />
              <div className="relative flex w-[211px] max-w-full flex-col items-stretch">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54a13d93402dea45c161d6667534328cb111679?placeholderIfAbsent=true"
                  className="aspect-[1.32] object-contain w-[33px] self-center"
                  alt="Service icon"
                />
                <div className="mt-[404px] max-md:mt-10">Gaming Arena</div>
              </div>
            </div>
          </div>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2fdee0289f533a723ea5ea9a86979b1adc10b43?placeholderIfAbsent=true"
              className="aspect-[0.92] object-contain w-[336px] shrink-0 max-w-full mt-[89px] max-md:mt-10"
              alt="Party events"
            />
          </div>
        </div>
      </div>

      <div className="flex w-[464px] max-w-full items-stretch mt-[72px] max-md:mt-10">
        <Button variant="primary">View All Services</Button>
        <Button variant="secondary">Book Now</Button>
      </div>
    </section>
  );
};
