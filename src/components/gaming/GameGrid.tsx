import React from "react";
import { GameCard } from "./GameCard";

export const GameGrid: React.FC = () => {
  const games = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c627bb62faa552ac1854be6f5bac849a6c25c9d?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b6ccbf4303cbff0f7fd1ced65945529ad0126e4?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/176d1eb74dcd43ede9f1b4acf5b2ebb701f60bfb?placeholderIfAbsent=true",
      name: "Cameron Williamson",
      company: "Gillette",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/38d110e8cba0faf8e3efa420b955bc8e5ea30f56?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/56cafe3d0d110bb513bdeb7a043ad3295cb087d3?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/939bffb4880923fe8edaeb0d127abb0eda6d3739?placeholderIfAbsent=true",
      name: "Dianne Russell",
      company: "Louis Vuitton",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae8c85744fc9c0a5f9b00ff6cb2fad8e6b427c2e?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ff5cde61560bb13b77bc31233686d6769168119?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a8b545bca4f159ff7ef90bf991cda1c1c885baf?placeholderIfAbsent=true",
      name: "Jane Cooper",
      company: "MasterCard",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/463a9c15c89049389c3c5a7ae03a0bbfd0d61436?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9fd85bd405504cbde9327867d50eb14dcb9e0c2?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad406ef5dd4d41d20862255d732b881b98ff5f1b?placeholderIfAbsent=true",
      name: "Cody Fisher",
      company: "The Walt Disney Company",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ccbda418e14bf5abf9552ae5d8338173952a2e5?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee85cf9635c9b752445fd2dd63c46dbf89f0ad0d?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6b3678ccfdf8ba2847e3485d474f8c51ef12a74?placeholderIfAbsent=true",
      name: "Wade Warren",
      company: "Gillette",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/33018cc5612ea0c2b75f7e707a246ed2c1a99cf1?placeholderIfAbsent=true",
      backgroundSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/885468ab784ec66c46b6ee06a0ac09f546fc4dbd?placeholderIfAbsent=true",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfbdb174c290add698b6814112869eff9a8c2ea9?placeholderIfAbsent=true",
      name: "Robert Fox",
      company: "L'Oréal",
    },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-white text-[66px] font-extrabold leading-[77px] tracking-[2.64px] text-center uppercase w-[718px] mt-[111px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px] max-md:mt-10">
        Welcome to the top games
      </h2>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/015e5910376fa08f87eccfb7bca8db1ed7f9aaba?placeholderIfAbsent=true"
        className="aspect-[13.7] object-contain w-[874px] fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] max-w-full mt-[38px]"
        alt="Decorative element"
      />

      <div className="w-full max-w-[1245px] mt-[77px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {games.slice(0, 3).map((game, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1245px] mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {games.slice(3).map((game, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>

      <div className="self-stretch flex min-h-11 w-full gap-[40px_63px] text-[37px] text-white font-extrabold uppercase tracking-[1.48px] leading-none mt-[108px] max-md:max-w-full max-md:mt-10">
        <div className="w-[424px] py-0.5">Gaming spaning</div>
        <div className="flex min-w-60 items-stretch gap-[22px] w-[429px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb683a9289200194cfdae039c5549a9610ca774?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11 shrink-0"
            alt="Action icon"
          />
          <div className="basis-auto grow shrink">Action - packed</div>
        </div>
        <div className="flex min-w-60 items-stretch gap-[22px] w-[396px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56ad857ba581d54a5b3fddd48e85f7cb50d2c9a?placeholderIfAbsent=true"
            className="aspect-[1.02] object-contain w-[45px] shrink-0"
            alt="Mind icon"
          />
          <div className="basis-auto grow shrink">mind - bending</div>
        </div>
        <div className="flex min-w-60 items-stretch gap-[23px] w-[553px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb33691a4d96f220f8f2620811cf63eccbeaf61a?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-11 shrink-0"
            alt="Collection icon"
          />
          <div className="basis-auto">collection og games</div>
        </div>
      </div>

      <div className="z-10 flex w-[747px] max-w-full items-stretch gap-5 flex-wrap justify-between mr-[129px] mt-[54px] max-md:mr-2.5 max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceac5e2117b5644a99f8502ecd14f71a9d5a12c0?placeholderIfAbsent=true"
          className="aspect-[1.27] object-contain w-[100px] shrink-0 max-w-full"
          alt="Partner logo 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceac5e2117b5644a99f8502ecd14f71a9d5a12c0?placeholderIfAbsent=true"
          className="aspect-[1.27] object-contain w-[100px] shrink-0 max-w-full"
          alt="Partner logo 2"
        />
      </div>
    </section>
  );
};
