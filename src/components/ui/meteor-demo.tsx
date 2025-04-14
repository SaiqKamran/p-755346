
import React from "react";
import { Meteors } from "./meteors";

export function MeteorDemo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Meteors number={20} />
    </div>
  );
}
