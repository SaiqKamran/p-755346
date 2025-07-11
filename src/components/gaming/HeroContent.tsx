
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { openWhatsAppChat } from "@/utils/whatsapp";

const ease = [0.16, 1, 0.3, 1];

interface HeroContentProps {
  title: string;
  description: string;
}

export function HeroContent({ title, description }: HeroContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCall = () => {
    window.location.href = "tel:+918264900999";
  };

  return (
    <div className="flex flex-col space-y-6" ref={containerRef}>
      {/* Hero Typography - inspired by reference site */}
      <div className="space-y-2">
        <motion.h1 
          className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-wider uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0, ease }}
        >
          WE MAKE
        </motion.h1>
        
        <div className="flex items-center gap-6">
          {/* Circular image like reference site */}
          <motion.div 
            className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease }}
          >
            <img 
              src="/lovable-uploads/177dc4ac-2a5c-4a60-a4f8-14dbbd5d1899.png"
              alt="Animation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-wider uppercase stroke-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0, ease }}
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
              WebkitTextFillColor: 'transparent'
            }}
          >
            CAREERS
          </motion.h1>
        </div>
      </div>

      <motion.p
        className="text-white text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mt-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1.2, ease }}
      >
        {description}
      </motion.p>
      
      <motion.div 
        className="flex gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease }}
      >
        <Button variant="whatsapp" onClick={() => openWhatsAppChat("General Inquiry")} className="scale-125" />
        <Button variant="call" onClick={handleCall} className="scale-125" />
      </motion.div>
    </div>
  );
}
