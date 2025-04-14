"use client";

import { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
const ASCII = ["\u270E", "\u2710", "\u2711", "\u2711"];
export function TextCursorProximityDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = false; // For simplicity, we're setting a default value

  return <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24" ref={containerRef}>
      
    </div>;
}
export { TextCursorProximityDemo as Preview };