"use client";
import { useEffect, useRef, useState } from "react";
import ChatWindow from "../Components/ChatWindow";
import StatusWindow from "../Components/StatusWindow";
import Sidebar from "../Components/Sidebar";

import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";
import { useApiContext } from "../Context/Api";
import { io } from "socket.io-client";
import useOnlineStatus from "@/lib/onlineStatus";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}

interface Group {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}
export interface StatusUpdate {
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

interface MessageType {
  id: number;
  userId: string;
  text: string;
  sender: "sender" | "receiver";
  time: string;
}

export default function Home() {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<StatusUpdate | null>(
    null
  );

  const statusUpdates: StatusUpdate[] = [
    {
      id: "1",
      user: "John Doe",
      status: "Enjoying the weekend! 🌴",
      time: "2h ago",
      avatar: "https://i.pravatar.cc/150?img=1",
      image: "https://source.unsplash.com/400x700/?beach",
      type: "image",
      viewed: false,
    },
    {
      id: "2",
      user: "Jane Smith",
      status: "Coffee time ☕",
      time: "4h ago",
      avatar: "https://i.pravatar.cc/150?img=2",
      image: "https://source.unsplash.com/400x700/?coffee",
      type: "image",
      viewed: true,
    },
  ];

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastMessage: "Hey, how are you?",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      lastMessage: "Let’s catch up soon!",
    },
  ];

  const groups: Group[] = [
    {
      id: "101",
      name: "Friends Group",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "Let's plan a trip!",
    },
  ];

  const [selectedCall, setSelectedCall] = useState<Call | null>(null);
  const calls: Call[] = [
    {
      id: "301",
      name: "Jane Smith",
      time: "Yesterday, 5:30 PM",
      type: "video",
    },
    {
      id: "302",
      name: "Jane Smith",
      time: "Yesterday, 5:30 PM",
      type: "audio",
    },
  ];
  type SharedMedia = string;

  type SharedLink = string;

  interface SharedDoc {
    name: string;
    url: string;
  }

  type TabType = "media" | "links" | "docs";

  const sharedMedia: SharedMedia[] = [
    "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500",
    "https://images.unsplash.com/photo-1557683316-973673baf926?w=500",
  ];

  const sharedLinks: SharedLink[] = [
    "https://www.example.com/article1",
    "https://www.example.com/article2",
    "https://www.example.com/article3",
  ];

  const sharedDocs: SharedDoc[] = [
    { name: "Document 1", url: "https://www.example.com/doc1.pdf" },
    { name: "Document 2", url: "https://www.example.com/doc2.pdf" },
    { name: "Document 3", url: "https://www.example.com/doc3.pdf" },
  ];

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    setSelectedStatus(null);
  };

  const handleSelectStatus = (status: StatusUpdate) => {
    setSelectedStatus(status);
    setSelectedConversation(null);
  };

  const handleSelectCall = (call: Call) => {
    setSelectedCall(call);
    setSelectedConversation(null);
    setSelectedStatus(null);
  };
  interface SidebarProps {
    conversations: Conversation[];
    groups: Group[];
    statusUpdates: StatusUpdate[];
    calls: Call[];
    onSelectConversation: (conversation: Conversation) => void;
    onSelectStatus: (status: StatusUpdate) => void;
    onSelectCall: (call: Call) => void;
  }
  const { theme, toggleTheme } = useTheme();
  const { useData, getUser, getAllUser, getUserFriends } = useApiContext();
  const [typingUsers, setTypingUsers] = useState<string | null>(null); // Track users typing

  const [userinfo, setUserinfo] = useState<any>();

  const getuserData = async () => {
    const user = await getUser();
    setUserinfo(user);
  };

  useEffect(() => {
    getuserData();
  }, []);

  // online offline status.....

  const onlineUsers = useOnlineStatus(userinfo);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center h-screen ${
        theme === "dark" ? "bg-gradient-to-r bg-zinc-950 " : "bg-color"
      }`}
    >
      <div className="w-full  h-full rounded-2xl text-white glassEffect overflow-hidden">
        <div className="flex">
          <Sidebar
            conversations={[
              ...conversations,
              ...groups.map((group) => ({
                ...group,
                lastMessage: "Group chat",
              })),
            ]}
            groups={groups}
            statusUpdates={statusUpdates}
            calls={calls}
            onSelectConversation={handleSelectConversation}
            onSelectStatus={handleSelectStatus}
            onSelectCall={handleSelectCall}
            typingUsers={typingUsers}

          />

          <div className="ml-[350px] overflow-y-auto min-h-screen w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className=" overflow-y-auto min-h-screen"
            >
              {selectedConversation ? (
                <ChatWindow
                  conversation={selectedConversation}
                  sharedMedia={sharedMedia}
                  sharedLinks={sharedLinks}
                  userinfo={userinfo}
                  sharedDocs={sharedDocs}
                  typingUsers={typingUsers}
                  setTypingUsers={setTypingUsers}
                />
              ) : selectedStatus ? (
                <StatusWindow statusUpdates={statusUpdates} />
              ) : null}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
