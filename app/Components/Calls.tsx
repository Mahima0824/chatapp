import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import IconButton from "./Icon";
import { Usemodel } from "../Context/context";
import { useTheme } from "../Context/ThemeContext";

interface Call {
  id: string;
  name: string;
  time: string;
  type: "audio" | "video";
}

interface CallProps {
  call: Call;
  onClick?: () => void;
}

const Calls: React.FC<CallProps> = ({ call }) => {
  const { setVideomodel, setVoicemodel } = Usemodel();
  const { theme } = useTheme();
  return (
    <div
      key={call.id}
      onClick={() => {
        call.type === "video" ? setVideomodel(true) : setVoicemodel(true);
      }}
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
        theme === "dark" ? "hover:bg-[#222222]" : "hover:bg-[#ffffff20]"
      }`}
    >
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12 border-2 rounded-full">
          <AvatarImage
            src="https://i.pravatar.cc/150?img=6"
            className="w-full h-full object-cover rounded-full"
          />
        </Avatar>
        <div>
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-gray-900"
            } font-semibold`}
          >
            {call.name}
          </p>
          <span
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } text-sm`}
          >
            {call.time}
          </span>
        </div>
      </div>
      <IconButton
        name={call.type === "video" ? "FaVideo" : "FaPhoneAlt"}
        size={16}
      />
    </div>
  );
};

export default Calls;
