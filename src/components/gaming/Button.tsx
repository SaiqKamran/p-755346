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
    <div
      className={`flex flex-col relative overflow-hidden aspect-[3.135] items-stretch justify-center px-[46px] py-[26px] cursor-pointer ${className} max-md:px-5`}
      onClick={onClick}
    >
      <img
        src={isPrimary ? "https://cdn.builder.io/api/v1/image/assets/TEMP/996096eb0b952988e218fb5fedb0605e5f7aa67f?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/b1839fdb95369a8d5f03aa241ede122fcb1452f2?placeholderIfAbsent=true"}
        className="absolute h-full w-full object-cover inset-0"
      />
      <div
        className={`relative ${isPrimary ? "text-white" : "bg-clip-text bg-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat]"} text-xl font-extrabold uppercase tracking-[0.8px] leading-none`}
      >
        {children}
      </div>
    </div>
  );
};
