
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

const ease = [0.16, 1, 0.3, 1];

interface HeroContentProps {
  title: string;
  description: string;
}

export function HeroContent({ title, description }: HeroContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col space-y-4" ref={containerRef}>
      <TextCursorProximity
        label={title}
        styles={{
          transform: {
            from: "scale(1)",
            to: "scale(1.15)"  // Increased scale effect
          },
          color: {
            from: "#FFFFFF",
            to: "#FFD700"  // Keeping the gold color
          }
        }}
        falloff="gaussian"
        radius={150}  // Increased radius to detect cursor from further away
        containerRef={containerRef}
        className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase max-w-[579px] max-md:max-w-full max-md:text-4xl max-md:leading-tight"
      />
      <motion.p
        className="text-white text-lg md:text-[19px] font-normal leading-[35px] tracking-[0.75px] max-w-[602px] mt-4 max-md:max-w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-stretch text-xl font-extrabold uppercase tracking-[0.8px] leading-none mt-8 gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease }}
      >
        <Button variant="primary">Get Course Info</Button>
        <Button variant="secondary">Contact Us</Button>
      </motion.div>
    </div>
  );
}
