import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="self-stretch flex w-full max-w-[1239px] flex-col max-md:max-w-full">
      <nav className="self-stretch flex items-center text-white leading-none flex-wrap max-md:max-w-full">
        <div className="self-stretch flex items-stretch gap-[7px] text-[31px] font-extrabold whitespace-nowrap tracking-[1.23px] w-[151px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18eeece59f761691ae67fcb51c9df24f6a40e99e?placeholderIfAbsent=true"
            className="aspect-[1.31] object-contain w-[46px] shrink-0"
            alt="Board logo"
          />
          <div>board</div>
        </div>
        <div className="self-stretch flex min-w-60 gap-10 text-lg font-normal uppercase tracking-[0.72px] flex-wrap my-auto max-md:max-w-full">
          <div className="font-extrabold">Products</div>
          <div>Apps & Games</div>
          <div>features</div>
          <div>Support</div>
          <div>about</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dab677b64751c6cd085afcd5914fc172a887d41?placeholderIfAbsent=true"
          className="aspect-[0.95] object-contain w-[21px] self-stretch shrink-0 my-auto"
          alt="Search icon"
        />
      </nav>
    </header>
  );
};
