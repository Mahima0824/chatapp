import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import IconButton from "./Icon";
import VideoCallModal from "./VideoCallModal";
import VoiceCallModal from "./VoiceCallModal";
import InfoModal from "./InfoModal";
import { Usemodel } from "../Context/context";
import { useTheme } from "../Context/ThemeContext";

interface HeaderProps {
  conversation: {
    avatar: string;
    name: string;
    lastSeen?: string;
  };
  search?: boolean;
  setSearch?: any;
  handleSearch?: () => void;
  onAvatarClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  conversation,
  search,
  setSearch,
  handleSearch,
  onAvatarClick,
}) => {
  if (!conversation) return null;

  const { setVideomodel, setVoicemodel } = Usemodel();
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`py-3 px-8 border-b shadow-lg backdrop-blur-md z-[99] transition-all duration-300 
          ${
          theme === "dark"
            ? "glassBg border-gray-700 text-white"
            : "bg-white/30 border-gray-300 text-black backdrop-blur-lg shadow-md"
        }
        `}
      >
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={onAvatarClick}
          >
            <Avatar className="w-14 h-14 border-[3px] p-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
              <div className="w-full h-full bg-black rounded-full p-[2px]">
                <AvatarImage
                  src={conversation.avatar}
                  className="w-full h-full object-cover rounded-full"
                  alt={conversation.name}
                />
              </div>
            </Avatar>
            <div>
              <h4
                className={`text-lg font-semibold ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {conversation.name}
              </h4>
              <span
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {conversation.lastSeen || "Last Seen Now"}
              </span>
            </div>
          </div>
          <div className="flex relative items-center gap-3">
            <IconButton
              name="FaPhoneAlt"
              size={18}
              onClick={() => setVoicemodel(true)}
            />
            <IconButton
              name="FaVideo"
              size={18}
              onClick={() => setVideomodel(true)}
            />
            <div className="relative">
              <InfoModal
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
                onAvatarClick={onAvatarClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
