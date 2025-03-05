"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import IconButton from "./Icon";
import Person from "./Person";
import Group from "./Group";
import Calls from "./Calls";
import Status from "./Status";
import { useSidebar } from "../Context/context";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}

interface StatusUpdate {
  id: string;
  avatar: string;
  user: string;
  time: string;
}

interface Call {
  id: string;
  name: string;
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

const   Sidebar: React.FC<SidebarProps> = ({
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchTerm("");
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStatus = statusUpdates.filter((status) =>
    status.user?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCalls = calls.filter((call) =>
    call.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-screen w-[350px] bg-gray-900 border-r border-gray-800 p-5 shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setProfilemodel(true)}
        >
          <Avatar className="w-12 h-12 border-2 border-blue-500 rounded-full">
            <AvatarImage
              src="https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60"
              className="w-full h-full object-cover"
              alt="User"
            />
          </Avatar>
          <span className="text-white font-semibold text-lg">Mahima</span>
        </motion.div>
        <div className="flex gap-3">
          <IconButton name="PiNotePencil" size={18} onClick={() => setProfilemodel(true)} />
          <IconButton name="IoSettings" size={18} onClick={() => setSettingmodel(true)} />
        </div>
      </div>

      <PlaceholdersAndVanishInput 
        placeholders={["Search..."]}
        onChange={(e) => setSearchTerm(e.target.value)}
        arrow={true}
      />

      {/* Tabs */}
      <div className="flex justify-center mt-5 space-x-4">
        {["Chats", "Groups", "Status", "Calls"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab
                ? "bg-gray-700 text-white shadow-md"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-5 space-y-3"
      >
        {activeTab === "Chats" &&
          filteredConversations.map((conv) => (
            <motion.div key={conv.id} whileHover={{ scale: 1.03 }}>
              <Person conversation={conv} onClick={() => onSelectConversation(conv)} />
            </motion.div>
          ))}

        {activeTab === "Groups" &&
          filteredGroups.map((group) => (
            <motion.div key={group.id} whileHover={{ scale: 1.03 }}>
              <Group conversation={group} onClick={() => onSelectConversation(group)} />
            </motion.div>
          ))}

        {activeTab === "Status" &&
          filteredStatus.map((status) => (
            <motion.div key={status.id} whileHover={{ scale: 1.03 }}>
              <Status status={status} onClick={() => onSelectStatus(status)} />
            </motion.div>
          ))}

        {activeTab === "Calls" &&
          filteredCalls.map((call) => (
            <motion.div key={call.id} whileHover={{ scale: 1.03 }}>
              <Calls call={call} onClick={() => onSelectCall(call)} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
