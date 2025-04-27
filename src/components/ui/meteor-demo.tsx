
import React from "react";
import { Meteors } from "./meteors";

export function MeteorDemo() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        willChange: "contents",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)"
      }}
    >
      <Meteors number={15} /> {/* Reduced number of meteors for better performance */}
    </div>
  );
}
