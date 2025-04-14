
import React from "react";
import { Meteors } from "./meteors";

export function MeteorDemo() {
  return (
    <div className="absolute bottom-0 left-0 overflow-hidden pointer-events-none">
      <Meteors number={20} />
    </div>
  );
}
