import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface PersonProps {
  conversation: {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
  };
  onClick: () => void;
}
const Group: React.FC<PersonProps> = ({ conversation, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full p-3  cursor-pointer transition-all duration-200 hover:bg-[#ffffff20]`}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="w-12 h-12 border-[3px] p-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
            <div className="w-full h-full bg-black rounded-full p-[2px]">
              <AvatarImage
                src={conversation?.avatar}
                alt={conversation.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Avatar>
          <div className="w-3 h-3 right-1 bottom-0 z-40 bg-green-500 absolute rounded-full border-2 border-black" />
        </div>
        <div className="flex-1">
          <h4 className="text-base text-slate-200 font-semibold">
            {conversation.name}
          </h4>
          <span className="text-sm text-slate-400">
            {conversation.lastMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Group;
