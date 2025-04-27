
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";
import { openWhatsAppChat } from "@/utils/whatsapp";
import { Phone } from "lucide-react";

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
    <div className="flex flex-col space-y-4" ref={containerRef}>
      <motion.div
        className="flex flex-col sm:flex-row items-stretch text-xl font-extrabold uppercase tracking-[0.8px] leading-none mb-8 gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease }}
      >
        <Button variant="whatsapp" onClick={() => openWhatsAppChat("General Inquiry")}>
          WhatsApp Us
        </Button>
        <Button variant="call" onClick={handleCall}>
          Call Us
        </Button>
      </motion.div>
      
      <TextCursorProximity
        label={title}
        styles={{
          transform: {
            from: "scale(1)",
            to: "scale(1.3)"
          },
          color: {
            from: "#FFFFFF",
            to: "#FFD700"
          }
        }}
        falloff="gaussian"
        radius={200}
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
    </div>
  );
}
