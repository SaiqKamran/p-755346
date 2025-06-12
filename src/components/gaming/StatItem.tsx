
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
      <div className={`text-4xl md:text-6xl font-bold mb-2 ${
        highlighted 
          ? 'text-yellow-400 drop-shadow-lg' 
          : 'text-white'
      }`}>
        {count}
      </div>
      <div className={`text-sm md:text-base font-semibold tracking-wider uppercase ${
        highlighted 
          ? 'text-yellow-300' 
          : 'text-white/80'
      }`}>
        {label}
      </div>
      {highlighted && (
        <div className="w-16 h-1 bg-yellow-400 rounded-full mt-2"></div>
      )}
    </div>
  );
};
