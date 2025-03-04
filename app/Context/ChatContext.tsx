"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dayjs from "dayjs";

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

interface ChatContextProps {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: (textMessage: string, file?: MessageType["file"]) => void;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showWallpaperModal: boolean;
  setShowWallpaperModal: React.Dispatch<React.SetStateAction<boolean>>;
  wallpaper: string;
  setWallpaper: React.Dispatch<React.SetStateAction<string>>;
  wallpaperColor: string;
  setWallpaperColor: React.Dispatch<React.SetStateAction<string>>;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [message, setMessage] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showWallpaperModal, setShowWallpaperModal] = useState<boolean>(false);
  const [wallpaper, setWallpaper] = useState<string>("");
  const [wallpaperColor, setWallpaperColor] = useState<string>("#ffffff"); // Default White Background

  const handleSend = (textMessage: string, file: MessageType["file"] = null) => {
    if (textMessage.trim() || file) {
      const newMessage: MessageType = {
        id: messages.length + 1,
        text: textMessage,
        sender: "sender",
        time: dayjs().format("h:mm A"),
        date: dayjs().format("YYYY-MM-DD"),
        conversationId: "1",
        file,
      };
      setMessages((prev) => [...prev, newMessage]);
    }
    setMessage("");
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        message,
        setMessage,
        handleSend,
        sidebarOpen,
        setSidebarOpen,
        showWallpaperModal,
        setShowWallpaperModal,
        wallpaper,
        setWallpaper,
        wallpaperColor,
        setWallpaperColor,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
