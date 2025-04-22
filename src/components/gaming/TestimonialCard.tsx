
import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  avatarSrc: string;
  name: string;
  role: string;
  rating: number;
  date: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  avatarSrc,
  name,
  role,
  rating,
  date
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full flex flex-col shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={avatarSrc}
            className="w-12 h-12 rounded-full object-cover"
            alt={`${name}'s profile`}
          />
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-gray-300 text-sm">{role}</p>
          </div>
        </div>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-200 flex-grow">
        {content}
      </p>
    </div>
  );
};
