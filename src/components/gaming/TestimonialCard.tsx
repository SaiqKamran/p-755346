import React from "react";

interface TestimonialCardProps {
  content: string;
  avatarSrc: string;
  name: string;
  company: string;
  backgroundSrc: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  avatarSrc,
  name,
  company,
  backgroundSrc,
}) => {
  return (
    <div className="flex flex-col shadow-[0px_4px_20px_-1px_rgba(0,0,0,0)] relative min-h-[388px] w-full text-white pt-[88px] pb-[33px] px-[43px] rounded-[10px] max-md:max-w-full max-md:mt-[31px] max-md:px-5">
      <img
        src={backgroundSrc}
        className="absolute h-full w-full object-cover inset-0"
        alt="Testimonial background"
      />
      <div className="relative text-base font-normal leading-[30px] tracking-[0.64px] max-md:max-w-full">
        {content}
      </div>
      <div className="relative shrink-0 h-px mt-7 max-md:max-w-full" />
      <div className="relative flex w-full items-stretch gap-5 font-medium leading-none flex-wrap justify-between mt-[26px] max-md:max-w-full max-md:mr-1">
        <div className="flex items-stretch gap-[11px]">
          <img
            src={avatarSrc}
            className="aspect-[1] object-contain w-[62px] shrink-0 rounded-[50%]"
            alt={`${name} avatar`}
          />
          <div className="flex flex-col items-stretch mt-[5px]">
            <div className="text-[21px] tracking-[0.73px]">{name}</div>
            <div className="text-xs tracking-[0.41px] mt-[9px]">{company}</div>
          </div>
        </div>
        <div className="flex items-stretch gap-1.5 text-[15px] whitespace-nowrap tracking-[0.51px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecae92c6afb3d8aadca174da22b5c4a6ccc1d83c?placeholderIfAbsent=true"
            className="aspect-[1.04] object-contain w-[25px] shrink-0"
            alt="Verified icon"
          />
          <div className="my-auto">Verified</div>
        </div>
      </div>
    </div>
  );
};
