import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col self-stretch relative min-h-[529px] w-full text-white -mt-8 pt-[139px] pb-[43px] px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/682f814612d1b649dbf855547e93b854fef6cc24?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Footer background"
      />
      <div className="relative flex w-[967px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <div className="flex flex-col">
          <div className="flex items-stretch gap-[9px] text-[40px] font-extrabold whitespace-nowrap tracking-[1.59px] leading-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c199ff2b2fcbd3a3eb57d851dfc9c2187921bbc?placeholderIfAbsent=true"
              className="aspect-[1.31] object-contain w-[59px] shrink-0"
              alt="Board logo"
            />
            <div className="basis-auto">board</div>
          </div>
          <div className="text-base font-normal leading-[30px] tracking-[0.64px] self-stretch mt-[33px]">
            A well-designed gaming header often incorporates elements such as
            game characters, iconic symbols, vibrant colors, and dynamic
            visuals.
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/444b0182269a02fd53e1e0192448ab0ad3c99003?placeholderIfAbsent=true"
            className="aspect-[3] object-contain w-[99px] mt-7"
            alt="Social media icons"
          />
        </div>

        <nav className="text-lg font-normal tracking-[0.72px] leading-none mt-1">
          <div className="flex w-full flex-col pl-[33px] max-md:pl-5">
            <div className="gap-10 font-extrabold whitespace-nowrap uppercase">
              company
            </div>
            <div className="self-center mt-[26px]">products</div>
            <div className="mt-8">apps & games</div>
            <div className="self-center mt-8">features</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45d1e82e7334afae701363ef715c0f7df2cbe8c9?placeholderIfAbsent=true"
            className="aspect-[5.08] object-contain w-[147px] mt-[54px] max-md:mt-10"
            alt="Payment methods"
          />
        </nav>

        <nav className="flex flex-col text-lg font-normal tracking-[0.72px] leading-none mt-1">
          <div className="gap-10 font-extrabold whitespace-nowrap uppercase">
            help
          </div>
          <div className="mt-[26px]">support</div>
          <div className="mt-8">about</div>
          <div className="self-stretch mt-8">contact us</div>
        </nav>

        <nav className="flex flex-col text-lg font-normal tracking-[0.72px] leading-none mt-1">
          <div className="gap-10 font-extrabold whitespace-nowrap uppercase">
            resources
          </div>
          <div className="mt-[26px]">youtube playlist</div>
          <div className="mt-8">how to - blog</div>
          <div className="self-stretch mt-8">terms & conditions</div>
        </nav>
      </div>

      <div className="relative flex items-stretch gap-[29px] text-sm font-normal tracking-[0.91px] leading-6 flex-wrap ml-3 mt-[60px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4eceb5dbc302db944dca672230a16542574486d?placeholderIfAbsent=true"
          className="aspect-[5.29] object-contain w-[148px] shrink-0 max-w-full"
          alt="Security badges"
        />
        <div className="basis-auto grow shrink">
          © Copyright 2023, All Rights Reserved by board
        </div>
      </div>
    </footer>
  );
};
