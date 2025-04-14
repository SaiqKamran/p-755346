import React from "react";
interface StatItemProps {
  count: string;
  label: string;
  highlighted?: boolean;
}
export const StatItem: React.FC<StatItemProps> = ({
  count,
  label,
  highlighted = false
}) => {
  return <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mx-[5px] px-[39px] py-[17px] my-px">
      <div className={`text-3xl font-extrabold leading-none tracking-[1.2px] uppercase ${highlighted ? "text-yellow-400" : "text-white"}`}>
        {count}
      </div>
      <div className="text-white text-[19px] font-normal leading-[35px] tracking-[0.75px] mt-[5px]">
        {label}
      </div>
    </div>;
};