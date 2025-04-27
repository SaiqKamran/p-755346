
import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  variant?: "primary" | "secondary" | "whatsapp" | "call";
  children: React.ReactNode;
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
        className={`w-[400px] h-[80px] bg-[url('/lovable-uploads/a0be808e-fd7d-4101-8edc-394264841004.png')] bg-contain bg-no-repeat bg-center hover:opacity-90 transition-opacity ${className}`}
      >
        <span className="sr-only">{children}</span>
      </button>
    );
  }

  if (variant === "call") {
    return (
      <button
        onClick={handleClick}
        className={`w-[400px] h-[80px] bg-[url('/lovable-uploads/a1db1cf2-3f5b-4ecf-a074-dd1aac25590e.png')] bg-contain bg-no-repeat bg-center hover:opacity-90 transition-opacity ${className}`}
      >
        <span className="sr-only">{children}</span>
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
