import React from "react";
import { useTheme } from "../Context/ThemeContext"; // Import Theme Context
import * as FaIcons from "react-icons/io5"; 
import * as HiIcons from "react-icons/hi"; 
import * as PiIcons from "react-icons/pi"; 
import * as FaIcon from "react-icons/fa";

interface IconButtonProps {
  name: string; 
  size?: number;
  onClick?: () => void;
  className?: string;
}

const 
IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  onClick,
  className = "",
}) => {
  const { theme } = useTheme();

  const IconComponent = 
    FaIcons[name as keyof typeof FaIcons] || 
    HiIcons[name as keyof typeof HiIcons] || 
    PiIcons[name as keyof typeof PiIcons] || 
    FaIcon[name as keyof typeof FaIcon];

  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 w-8 h-8 rounded-full shadow-md transition-all 
        ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-blue-100 text-[#05445E] hover:bg-blue-200"} 
        ${className}`}
    >
      <IconComponent size={size} color={theme === "dark" ? "#ffffff" : "#05445E"} />
    </button>
  );
};

export default IconButton;
