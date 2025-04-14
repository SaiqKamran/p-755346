
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  onClick,
}) => {
  const isPrimary = variant === "primary";

  return (
    <button
      className={`relative overflow-hidden inline-flex items-center justify-center py-3 px-6 font-bold uppercase tracking-wider rounded-md transition-all ${
        isPrimary 
          ? "bg-yellow-400 text-black hover:bg-yellow-500" 
          : "bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
