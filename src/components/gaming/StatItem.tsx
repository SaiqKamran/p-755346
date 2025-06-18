
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
    <div className={`flex flex-col items-center text-center ${highlighted ? 'scale-110' : ''}`}>
      <div className={`text-4xl lg:text-5xl font-bold mb-2 ${highlighted ? 'text-yellow-400' : 'text-white'}`}>
        {count}
      </div>
      <div className="text-gray-300 font-medium tracking-wider">
        {label}
      </div>
    </div>
  );
};
