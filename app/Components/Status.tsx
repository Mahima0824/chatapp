import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

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
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer"
    >
      <Avatar
        className={`w-12 h-12 border-2 ${
          viewed ? "border-gray-500" : "border-green-500"
        }`}
      >
        <AvatarImage src={status.avatar} className="w-full h-full object-cover" />
      </Avatar>
      <div>
        <p className="text-white font-semibold">{status.user}</p>
        <span className="text-gray-400 text-sm">{status.time}</span>
      </div>
    </div>
  );
};

export default Status;
