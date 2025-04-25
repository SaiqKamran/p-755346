
import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  variant?: "primary" | "secondary";
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
  const isPrimary = variant === "primary";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
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
