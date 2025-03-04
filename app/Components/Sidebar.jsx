"use client";
import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import IconButton from "./Icon";
import Person from "./Person";
import Group from "./Group";
import Calls from "./Calls";
import Status from "./Status";
import { useSidebar } from "../Context/context";

const Sidebar = ({
  conversations,
  statusUpdates,
  onSelectConversation,
  onSelectStatus,
  groups,
  calls,
  onSelectCall,
}) => {
  const [activeTab, setActiveTab] = useState("Chats");
  const [searchTerm, setSearchTerm] = useState("");
  const { setProfilemodel } = useSidebar();


  const handleTabClick = (tab) => {
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
    <div className="fixed top-0 left-0 h-screen w-[350px] bg-gray-900 border-r border-gray-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setProfilemodel(true)}>
          <Avatar className="w-12 h-12 border-2 border-blue-500 rounded-full">
            <AvatarImage
              src="https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXQlMjBtb2RhbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
              className="w-full h-full object-cover"
              alt="User"
            />
          </Avatar>
          <span className="text-white font-semibold">Mahima</span>
        </div>
        <div className="flex gap-2">
          <IconButton name="PiNotePencil" size={16} onClick={() => setProfilemodel(true)} />
          <IconButton name="IoSettings" size={16} />
        </div>
      </div>

      <PlaceholdersAndVanishInput
        placeholders={["Search"]}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex justify-around mt-4 border-b border-gray-600 relative">
        {["Chats", "Groups", "Status", "Calls"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`relative py-2 px-4 text-sm font-semibold rounded-t-lg transition-all duration-300 ${activeTab === tab
                ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg scale-105"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
        {activeTab === "Chats" &&
          filteredConversations.map((conv) => (
            <Person
              key={conv.id}
              conversation={conv}
              onClick={() => onSelectConversation(conv)}
            />
          ))}
        {activeTab === "Groups" &&
          filteredGroups.map((group) => (
            <Group
              key={group.id}
              conversation={group}
              onClick={() => onSelectConversation(group)}
            />
          ))}
        {activeTab === "Status" &&
          filteredStatus.map((status) => (
            <Status
              key={status.id}
              status={status}
              onClick={() => onSelectStatus(status)}
            />
          ))}
        {activeTab === "Calls" &&
          filteredCalls.map((call) => (
            <Calls key={call.id} call={call} onClick={() => onSelectCall(call)} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
