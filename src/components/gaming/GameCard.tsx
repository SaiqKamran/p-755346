import React from "react";

interface GameCardProps {
  imageSrc: string;
  backgroundSrc: string;
  avatarSrc: string;
  name: string;
  company: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  backgroundSrc,
  avatarSrc,
  name,
  company,
}) => {
  return (
    <div className="flex flex-col shadow-[0px_4px_20px_-1px_rgba(0,0,0,0)] relative aspect-[0.739] w-full items-stretch text-white font-medium leading-none pt-5 pb-[46px] px-[18px] rounded-[10px] max-md:mt-[27px]">
      <img
        src={backgroundSrc}
        className="absolute h-full w-full object-cover inset-0"
        alt="Card background"
      />
      <img
        src={imageSrc}
        className="aspect-[1.36] object-contain w-full shadow-[0px_4px_20px_-1px_rgba(0,0,0,0)] rounded-[10px]"
        alt="Game screenshot"
      />
      <div className="relative text-2xl tracking-[0.84px] mt-[30px]">
        core philosophies
      </div>
      <div className="relative flex items-stretch gap-2.5 mt-[18px]">
        <img
          src={avatarSrc}
          className="aspect-[1] object-contain w-[53px] shrink-0 rounded-[50%]"
          alt={`${name} avatar`}
        />
        <div className="flex flex-col items-stretch mt-1">
          <div className="text-lg tracking-[0.63px]">{name}</div>
          <div className="text-[10px] tracking-[0.35px] mt-2">{company}</div>
        </div>
      </div>
      <div className="flex flex-col relative fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] overflow-hidden aspect-[6.942] w-[361px] text-lg font-extrabold uppercase mt-[26px] px-[70px] py-5 max-md:px-5 cursor-pointer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c291a4bcc61dd5f27cf6fde4a83269766050962?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Button background"
        />
        <span className="relative">Live Demo</span>
      </div>
    </div>
  );
};
