
import React from "react";

export const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="shadow-[0px_4px_20px_-1px_rgba(0,0,0,0)] w-[1240px] max-w-full mt-[111px] rounded-[10px] max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[61%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e5e55e5416882388ed16d5453ac50b1437907ac?placeholderIfAbsent=true"
              className="aspect-[1.14] object-contain w-full mt-[-81px] grow max-md:max-w-full"
              alt="Premium Gaming Experience"
            />
          </div>
          <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch font-extrabold mt-[65px] max-md:max-w-full max-md:mt-10">
              <h2 className="text-white text-5xl leading-[56px] tracking-[-0.24px] uppercase mr-[21px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px] max-md:mr-2.5">
                Ultimate Gaming Experience
              </h2>
              <p className="text-white text-base font-normal leading-[30px] tracking-[0.64px] mt-3 max-md:max-w-full">
                Experience gaming like never before at Arena Chandigarh. Our state-of-the-art facilities offer the latest gaming consoles, high-end PCs, and VR experiences, all in a vibrant and immersive environment.
              </p>
              <div className="text-xl leading-none tracking-[0.8px] uppercase bg-clip-text bg-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] ml-[46px] mt-[61px] max-md:ml-2.5 max-md:mt-10 cursor-pointer">
                Book Now
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch flex min-h-11 w-full gap-[40px_63px] text-[37px] text-white font-extrabold uppercase tracking-[1.48px] leading-none mt-[86px] max-md:max-w-full max-md:mt-10">
        <div className="w-[424px] py-0.5">Our Offerings</div>
        <div className="flex min-w-60 items-stretch gap-[22px] w-[429px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d2cd9e31587325f5ebc0fd13ad979fbfdc8c5d2?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11 shrink-0"
            alt="Gaming icon"
          />
          <div className="basis-auto grow shrink">Gaming Zone</div>
        </div>
        <div className="flex min-w-60 items-stretch gap-[22px] w-[396px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/188f8d0acc7ddcc5ed6d7258d39362db581fca6d?placeholderIfAbsent=true"
            className="aspect-[1.02] object-contain w-[45px] shrink-0"
            alt="Party icon"
          />
          <div className="basis-auto grow shrink">Party Venue</div>
        </div>
        <div className="flex min-w-60 items-stretch gap-[23px] w-[553px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdee18f3f1fba51546f80fce87c38b0e72224ff7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11 shrink-0"
            alt="Events icon"
          />
          <div className="basis-auto">Corporate Events</div>
        </div>
      </div>
    </section>
  );
};
