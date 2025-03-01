import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import IconButton from "./Icon";
import { Usemodel } from "../Context/context";

interface call {
  id: string;
  name: string;
  time: string;
  type: "audio" | "video";
}

interface CallProps {
  call: call;
}
const Calls: React.FC<CallProps> = ({ call }) => {
  const { setVideomodel, setVoicemodel } = Usemodel();
  return (
    <div
      key={call.id}
      onClick={() => {
        call.type === "video" ? setVideomodel(true) : setVoicemodel(true);
      }}
      className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://i.pravatar.cc/150?img=6"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <div>
          <p className="text-white font-semibold">{call.name}</p>
          <span className="text-gray-400 text-sm">{call.time}</span>
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
