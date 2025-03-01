import React from "react";
import * as FaIcons from "react-icons/io5"; 
import * as HiIcons from "react-icons/hi"; 
import * as PiIcons from "react-icons/pi"; 
import * as FaIcon from "react-icons/fa";


interface IconButtonProps {
  name: string; 
  size?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = "white",
  onClick,
  className = "",
}) => {
  const IconComponent = FaIcons[name as keyof typeof FaIcons] || HiIcons[name as keyof typeof HiIcons] || PiIcons[name as keyof typeof PiIcons] || FaIcon[name as keyof typeof FaIcon];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all ${className}`}
    >
      <IconComponent size={size} color={color} />
    </button>
  );
};

export default IconButton;
