import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { useTheme } from "../Context/ThemeContext";

interface StatusTypes {
  status: {
    id: string;
    avatar: string;
    user: string;
    time: string;
  };
  viewed: boolean;
  onClick: () => void;
}

const Status: React.FC<StatusTypes> = ({ status, viewed, onClick }) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`w-full p-3 cursor-pointer transition-allv rounded-lg  duration-200 ${
        theme === "dark" ? "hover:bg-[#222222]" : "hover:bg-[#ffffff20]"
      }`}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar
            className={`w-12 h-12 border-2 ${
              viewed ? "border-gray-500" : "border-green-500"
            }`}
          >
            <AvatarImage
              src={status.avatar}
              className="w-full h-full object-cover"
            />
          </Avatar>
        </div>
        <div className="flex-1">
          <p
            className={`text-base font-semibold ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            {status.user}
          </p>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {status.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Status;
