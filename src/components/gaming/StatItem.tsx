
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
  return (
    <div className={`flex flex-col items-center ${highlighted ? 'scale-110' : ''}`}>
      <div className={`text-4xl md:text-[44px] font-bold ${highlighted ? 'text-yellow-400' : 'text-white'} mb-1`}>
        {count}
      </div>
      <div className="text-base md:text-xl font-medium text-white/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};
