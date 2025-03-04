"use client";

import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import Header from "./Header";
import { EmojiType } from "ms-3d-emoji-picker";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import SearchModal from "./SearchModal";
import { useSidebar } from "../Context/context";
import { successToast } from "@/components/ui/Toast";
import ChatInput from "./ChatInput";
import PersonalInfo from "./PersonalInfo";
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
  const [newestMessageId, setNewestMessageId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSend = (
    textMessage: any,
    file: MessageType["file"] = null
  ): void => {
    if (textMessage?.trim() || file) {
      const newMessage: MessageType = {
        id: messages.length + 1,
        text: textMessage,
        sender: "sender",
        time: dayjs().format("h:mm A"),
        date: dayjs().format("YYYY-MM-DD"),
        conversationId: conversation.id,
        file,
      };
      setNewestMessageId(newMessage.id);
      setMessages([...messages, newMessage]);
    } else {
      textMessage == null ? null : message;
    }
    setMessage("");
  };
  const handleEmojiSelect = (selectedEmoji: EmojiType) => {
    const emojiMessage = `<img src="${selectedEmoji.url}" alt="emoji" class="w-full h-full inline-block" />`;
    handleSend(emojiMessage);
    setShowPicker(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const fileMessage = {
        name: file.name,
        type: file.type,
        url: fileUrl,
      };

      handleSend("", fileMessage);
    }
  };

  const groupedMessages: Record<string, MessageType[]> = messages
    .filter((msg) => msg.conversationId === conversation.id)
    .reduce((acc, msg) => {
      if (!acc[msg.date]) acc[msg.date] = [];
      acc[msg.date].push(msg);
      return acc;
    }, {} as Record<string, MessageType[]>);

  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
    console.log("serach");
  };

  const wallpaperInputRef = useRef<HTMLInputElement>(null);
  const [wallpaper, setWallpaper] = useState<string>("");
  const [showWallpaperModal, setShowWallpaperModal] = useState(false);
  const [customColor, setCustomColor] = useState<string>("#000000");
  const [editMessageId, setEditMessageId] = useState<number | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    message: MessageType;
  } | null>(null);
  const { editmodel, setEditmodel } = useSidebar();

  const handleWallpaperUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setWallpaper(`url(${fileUrl})`);
      setShowWallpaperModal(false);
    }
  };

  const handleColorChange = (color: string) => {
    setWallpaper(color.startsWith("#") ? color : `url(${color})`);
    setShowWallpaperModal(false);
  };

  const handleEdit = (msg: MessageType) => {
    setMessage(msg.text);
    setEditMessageId(msg.id);
    setContextMenu(null);
    setEditmodel(true);
  };

  const handleCopy = (msg: MessageType) => {
    navigator.clipboard.writeText(msg.text);
    setContextMenu(null);
    successToast("success");
  };

  const handleDelete = (msgId: number) => {
    setMessages(messages.filter((m) => m.id !== msgId));
    setContextMenu(null);
  };
  
  const [activeConversation, setActiveConversation] = useState(conversation);
const [filteredMessages, setFilteredMessages] = useState<MessageType[]>(messages);
const handleSearching = (query: string) => {
  if (!query) {
    setActiveConversation(conversation);
    setFilteredMessages(messages);
    return;
  }
  const matchingConversation = conversations.find((conv) =>
    conv.name.toLowerCase().includes(query.toLowerCase())
  );
  if (matchingConversation) {
    setActiveConversation(matchingConversation);
    
   
    const newMessages = messages.filter(
      (msg) => msg.conversationId === matchingConversation.id
    );
    setFilteredMessages(newMessages);
  }
};
  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex flex-col flex-1 ${
          sidebarOpen ? "lg:w-2/3" : "w-full"
        }`}
      >
        {search ? (
          <SearchModal setSearch={setSearch} setSearch={setSearch} onSearch={handleSearching} />
        ) : (
          <Header
            conversation={conversation}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            onAvatarClick={() => setSidebarOpen(true)}
          />
        )}

        <div
          className="flex-1 overflow-y-auto p-4"
          style={{
            backgroundImage: wallpaper.startsWith("#") ? "none" : wallpaper,
            backgroundColor: wallpaper.startsWith("#") ? wallpaper : "",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {Object.entries(groupedMessages).map(([date, msgs]) => (
            <div key={date}>
              <div className="text-center bg-slate-300/10 w-fit mx-auto py-2 px-4 rounded-full text-xs text-gray-400   my-4">
                {dayjs(date).isToday()
                  ? "Today"
                  : dayjs(date).isYesterday()
                  ? "Yesterday"
                  : dayjs(date).format("DD MMM, YYYY")}
              </div>
              <AnimatePresence>
                {msgs.map((msg) => (
                  <Message
                    key={msg.id}
                    message={msg}
                    isOwnMessage={msg.sender === "sender"}
                    isNewestMessage={msg.id === newestMessageId}
                    setNewestMessageId={setNewestMessageId}
                    handleEdit={handleEdit}
                    handleCopy={handleCopy}
                    handleDelete={handleDelete}
                    messages={filteredMessages}
                    conversation={activeConversation}
                  />
                ))}
              </AnimatePresence>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput
          handleEmojiSelect={handleEmojiSelect}
          handleFileUpload={handleFileUpload}
          handleSend={handleSend}
          message={message}
        />
      </div>
      {sidebarOpen && (
        <PersonalInfo
          conversation={conversation}
          setSidebarOpen={setSidebarOpen}
          sharedMedia={sharedMedia}
          sharedLinks={sharedLinks}
          sharedDocs={sharedDocs}
          setShowWallpaperModal={setShowWallpaperModal}
          showWallpaperModal={showWallpaperModal}
          handleColorChange={handleColorChange}
          setCustomColor={setCustomColor}
          handleWallpaperUpload={handleWallpaperUpload}
          wallpaperInputRef={wallpaperInputRef}
        />
      )}
    </motion.div>
  );
};

export default ChatWindow;
