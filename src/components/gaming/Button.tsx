
import React from "react";
import { openWhatsAppChat } from "@/utils/whatsapp";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  source?: string;
  phoneNumber?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  source = "General Inquiry",
  phoneNumber
}) => {
  const isPrimary = variant === "primary";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      openWhatsAppChat(source);
    }
  };

  return (
    <button
      className={`relative overflow-hidden inline-flex items-center justify-center py-3 px-6 font-bold uppercase tracking-wider rounded-md transition-all ${
        isPrimary 
          ? "bg-yellow-400 text-black hover:bg-yellow-500" 
          : "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
