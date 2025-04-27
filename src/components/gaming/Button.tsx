
import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  variant?: "primary" | "secondary" | "whatsapp" | "call";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  to
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  if (variant === "whatsapp") {
    return (
      <button
        onClick={handleClick}
        className={`relative inline-block transition-transform hover:scale-105 ${className}`}
      >
        <img 
          src="/lovable-uploads/739454b0-09d6-4f09-a59b-1ea6e3a564bc.png"
          alt="WhatsApp Us"
          className="h-12 w-auto"
        />
      </button>
    );
  }

  if (variant === "call") {
    return (
      <button
        onClick={handleClick}
        className={`relative inline-block transition-transform hover:scale-105 ${className}`}
      >
        <img 
          src="/lovable-uploads/d4086534-2cf9-4d90-b767-9eedd451d4d9.png"
          alt="Call Us"
          className="h-12 w-auto"
        />
      </button>
    );
  }

  return (
    <button
      className={`relative overflow-hidden inline-flex items-center justify-center py-3 px-6 font-bold uppercase tracking-wider rounded-md transition-all ${
        variant === "primary" 
          ? "bg-yellow-400 text-black hover:bg-yellow-500" 
          : "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

