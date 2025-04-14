import React from "react";

interface StatItemProps {
  count: string;
  label: string;
  highlighted?: boolean;
}

export const StatItem: React.FC<StatItemProps> = ({
  count,
  label,
  highlighted = false,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`text-3xl font-extrabold leading-none tracking-[1.2px] uppercase ${
          highlighted
            ? "bg-clip-text bg-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]"
            : "text-white"
        }`}
      >
        {count}
      </div>
      <div className="text-white text-[19px] font-normal leading-[35px] tracking-[0.75px] mt-[5px]">
        {label}
      </div>
    </div>
  );
};
