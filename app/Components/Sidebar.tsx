"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import IconButton from "./Icon";
import Person from "./Person";
import Group from "./Group";
import Calls from "./Calls";
import Status from "./Status";
import { useSidebar } from "../Context/context";
import { useTheme } from "../Context/ThemeContext";
import { cn } from "@/lib/utils";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}

interface StatusUpdate {
  id: string;
  user: string;
  status: string;
  time: string;
  avatar: string;
  image?: string;
  type?: "video" | "image";
  viewed: boolean;
}

interface Call {
  id: string;
  name: string;
  time: string;
  type: "audio" | "video";
}

interface SidebarProps {
  conversations: Conversation[];
  statusUpdates: StatusUpdate[];
  onSelectConversation: (conv: Conversation) => void;
  onSelectStatus: (status: StatusUpdate) => void;
  groups: Conversation[];
  calls: Call[];
  onSelectCall: (call: Call) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  statusUpdates,
  onSelectConversation,
  onSelectStatus,
  groups,
  calls,
  onSelectCall,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Chats");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setProfilemodel, setSettingmodel } = useSidebar();

  const { theme, toggleTheme } = useTheme();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchTerm("");
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 h-screen w-[350px] p-5 shadow-lg transition-all ${
        theme === "dark" ? "glassBg" : "sidebar-light"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setProfilemodel(true)}
        >
          <Avatar
            className={cn(
              "w-12 h-12 border-2 rounded-full",
              theme === "dark" ? "border-white" : "border-[#05445E]"
            )}
          >
            <AvatarImage
              src="https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60"
              className="w-full h-full object-cover"
              alt="User"
            />
          </Avatar>
          <span
            className={
              theme === "dark"
                ? "text-white"
                : "text-[#05445E] font-semibold text-lg"
            }
          >
            Mahima
          </span>
        </motion.div>
        <div className="flex gap-3">
          <IconButton
            name="PiNotePencil"
            size={18}
            onClick={() => setProfilemodel(true)}
          />
          <IconButton
            name="IoSettings"
            size={18}
            onClick={() => setSettingmodel(true)}
          />

          <IconButton
            name={theme === "dark" ? "IoSunny" : "IoMoon"}
            size={18}
            onClick={toggleTheme}
          />
        </div>
      </div>

      <PlaceholdersAndVanishInput
        placeholders={["Search..."]}
        onChange={(e) => setSearchTerm(e.target.value)}
        onSubmit={(e) => e.target}
        arrow={true}
      />

      <div className="flex justify-center mt-5 space-x-3">
        {["Chats", "Groups", "Status", "Calls"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={cn(
              "relative px-4 py-2 rounded-full transition-all",
              activeTab === tab
                ? theme === "dark"
                  ? "bg-[#111111] text-white shadow-md"
                  : "bg-blue-300 text-[#05445E] shadow-md"
                : theme === "dark"
                ? "text-white"
                : "text-[#05445E]"
            )}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={
                  theme === "dark"
                    ? "absolute inset-0 bg-[#111111] rounded-full"
                    : "absolute inset-0 bg-blue-300 rounded-full"
                }
              />
            )}
            <span className="relative block text-sm">{tab}</span>
          </button>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-5 space-y-3"
      >
        {activeTab === "Chats" &&
          conversations.map((conv) => (
            <motion.div key={conv.id} whileHover={{ scale: 1.03 }}>
              <Person
                conversation={conv}
                onClick={() => onSelectConversation(conv)}
              />
            </motion.div>
          ))}

        {activeTab === "Groups" &&
          groups.map((group) => (
            <motion.div key={group.id} whileHover={{ scale: 1.03 }}>
              <Group
                conversation={group}
                onClick={() => onSelectConversation(group)}
              />
            </motion.div>
          ))}

        {activeTab === "Status" &&
          statusUpdates.map((status) => (
            <motion.div key={status.id} whileHover={{ scale: 1.03 }}>
              <Status
                status={status}
                viewed={status.viewed}
                onClick={() => onSelectStatus(status)}
              />
            </motion.div>
          ))}

        {activeTab === "Calls" &&
          calls.map((call) => (
            <motion.div key={call.id} whileHover={{ scale: 1.03 }}>
              <Calls call={call} onClick={() => onSelectCall(call)} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
