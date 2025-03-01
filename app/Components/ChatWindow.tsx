"use client";

import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import Header from "./Header";
import { Smile, Send, Paperclip, X } from "lucide-react";
import { Picker, EmojiType } from "ms-3d-emoji-picker";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import SearchModal from "./SearchModal";
import ImgModal from "./ImgModal";
import { useSidebar } from "../Context/context";

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

interface MessageType {
  id: number;
  text: string;
  sender: "sender" | "receiver";
  time: string;
  conversationId: string;
  date: string;
  file?: {
    name: string;
    type: string;
    url: string;
  } | null;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  number?: string;
}

interface ChatWindowProps {
  conversation: Conversation;
  messages: MessageType[];
  sharedMedia: string[];
  sharedLinks: string[];
  sharedDocs: { name: string; url: string }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  conversation,
  messages: initialMessages,
  sharedMedia,
  sharedLinks,
  sharedDocs,
}) => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [message, setMessage] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (
    textMessage: string,
    file: MessageType["file"] = null
  ): void => {
    if (textMessage.trim() || file) {
      const newMessage: MessageType = {
        id: messages.length + 1,
        text: textMessage,
        sender: "sender",
        time: dayjs().format("h:mm A"),
        date: dayjs().format("YYYY-MM-DD"),
        conversationId: conversation.id,
        file,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };
  const { imgmodel, setIsmodel, setSelectedImage } = useSidebar();
  const [activeTab, setActiveTab] = useState("media");

  const openImageModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setIsmodel(true);
  };
  return (
    <div className="flex h-screen bg-zinc-900">
      <div
        className={`flex flex-col flex-1 ${
          sidebarOpen ? "lg:w-2/3" : "w-full"
        }`}
      >
        <Header
          conversation={conversation}
          onAvatarClick={() => setSidebarOpen(true)}
        />
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg) => (
            <Message
              key={msg.id}
              message={msg}
              isOwnMessage={msg.sender === "sender"}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t p-4 bg-zinc-900 flex items-center gap-3">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="p-2 hover:bg-zinc-700 rounded-lg"
          >
            <Smile className="w-6 h-6 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-zinc-700 rounded-lg">
            <Paperclip className="w-6 h-6 text-gray-400" />
          </button>
          <div className="flex-1">
            <PlaceholdersAndVanishInput
              placeholders={["Type a message..."]}
              onChange={(e: any) => setMessage(e.target.value)}
              onSubmit={() => handleSend(message)}
            />
          </div>
          <button
            onClick={() => handleSend(message)}
            className="p-2 hover:bg-zinc-700 rounded-lg"
          >
            <Send className="w-6 h-6 text-blue-500" />
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="w-1/3 bg-zinc-800 p-6 shadow-lg border-l border-gray-700 relative">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>

          <div className="text-center">
            <img
              src={conversation.avatar}
              alt={conversation.name}
              className="w-24 h-24 rounded-full mx-auto shadow-md"
            />
            <h2 className="text-white text-lg font-semibold mt-4">
              {conversation.name}
            </h2>
          </div>
          <div className="mt-4 text-gray-300 text-sm">
            <h3 className="font-semibold">🔔 Notifications</h3>
            <p>Turn on/off message notifications for this chat.</p>
            <button className="bg-blue-500 px-4 py-2 mt-2 rounded-md text-white">
              Toggle Notifications
            </button>

            <h3 className="mt-4 font-semibold">⏳ Disappearing Messages</h3>
            <p>Enable disappearing messages for privacy.</p>
            <button className="bg-red-500 px-4 py-2 mt-2 rounded-md text-white">
              Enable Disappearing
            </button>
          </div>
          <div className="mt-6">
            <div className="flex justify-around border-b border-gray-600 pb-2">
              {["media", "links", "docs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-gray-400 px-4 py-2 ${
                    activeTab === tab
                      ? "text-white border-b-2 border-blue-400"
                      : ""
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            {activeTab === "media" && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {sharedMedia.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="h-full w-full rounded-lg cursor-pointer object-cover shadow-sm"
                    onClick={() => openImageModal(img)}
                  />
                ))}
              </div>
            )}
            {activeTab === "links" && (
              <div className="mt-4 space-y-2">
                {sharedLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-zinc-700 p-3 rounded-lg flex items-center gap-3 hover:bg-zinc-600 transition"
                  >
                    🔗
                    <span className="text-blue-400 truncate">{link}</span>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "docs" && (
              <div className="mt-4 space-y-3">
                {sharedDocs.map((doc, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-zinc-700 p-3 rounded-lg hover:bg-zinc-600 transition"
                  >
                    <div className="flex items-center gap-3 text-gray-300">
                      📄 <span>{doc.name}</span>
                    </div>
                    <a
                      href={doc.url}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
          <h2 className="text-lg font-semibold">Change Wallpaper</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
