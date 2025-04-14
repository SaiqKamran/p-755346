
import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 50).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-1 w-1 rounded-[9999px] bg-[#8B5CF6] shadow-[0_0_10px_2px_#8B5CF6] rotate-[215deg] opacity-70 hover:opacity-100",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[100px] before:h-[2px] before:bg-gradient-to-r before:from-[#8B5CF6] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (600 - -600) + -600) + "px",
            animationDelay: Math.random() * (1.2 - 0.1) + 0.1 + "s",
            animationDuration: Math.floor(Math.random() * (12 - 5) + 5) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
