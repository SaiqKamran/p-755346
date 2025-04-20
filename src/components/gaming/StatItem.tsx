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
  return <div className={`flex flex-col items-center ${highlighted ? 'scale-110' : ''}`}>
      
      
    </div>;
};