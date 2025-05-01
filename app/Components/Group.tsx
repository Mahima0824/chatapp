import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { useTheme } from "../Context/ThemeContext";

interface PersonProps {
  conversation: {
    id: string;
    name: string;
    images: string;
    lastMessage: string;
  };
  onClick: () => void;
}
const Group: React.FC<PersonProps> = ({ conversation, onClick }) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`w-full p-3 cursor-pointer rounded-lg  transition-all duration-200 ${
        theme === "dark" ? "hover:bg-[#222222]" : "hover:bg-[#ffffff20]"
      }`}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar
            className={`w-12 h-12 border-[3px] p-[2px] rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-gray-700 to-gray-900 border-white"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 border-[#05445E]"
            }`}
          >
            <div
              className={`w-full h-full rounded-full p-[2px] ${
                theme === "dark" ? "bg-gray-800" : "bg-black"
              }`}
            >
              <AvatarImage
                src={conversation?.images}
                alt={conversation.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Avatar>
          <div
            className={`w-3 h-3 right-1 bottom-0 z-40 absolute rounded-full border-2 ${
              theme === "dark" ? "border-gray-800" : "border-black"
            } bg-green-500`}
          />
        </div>
        <div className="flex-1">
          <h4
            className={`text-base font-semibold ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            {conversation.name}
          </h4>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {conversation.lastMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Group;
