
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

interface HeroContentProps {
  title: string;
  description: string;
}

export function HeroContent({ title, description }: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="text-white text-5xl md:text-[69px] font-extrabold leading-tight tracking-[2.76px] uppercase max-w-[579px] max-md:max-w-full max-md:text-4xl max-md:leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
      >
        {title}
      </motion.h1>
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
