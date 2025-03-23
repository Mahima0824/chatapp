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
import { useTheme } from "../Context/ThemeContext";
import { successToast } from "@/components/ui/Toast";
import ChatInput from "./ChatInput";
import PersonalInfo from "./PersonalInfo";
import { useApiContext } from "../Context/Api";
import io from "socket.io-client"; // Import socket.io

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

const socket = io("http://localhost:5000"); // Connect to the socket server

const ChatWindow = ({
  conversation,
  sharedMedia,
  sharedLinks,
  sharedDocs,
  userinfo,
}: any) => {
  const [messages, setMessages] = useState<any[]>([]); // Holds all messages in the conversation
  const [newestMessageId, setNewestMessageId] = useState<number | null>(null); // Tracks the most recent message
  const [showPicker, setShowPicker] = useState<boolean>(false); // For emoji picker toggle
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // For toggling sidebar
  const messagesEndRef = useRef<HTMLDivElement>(null); // To scroll to the latest message
  const { theme } = useTheme();
  const [message, setMessage] = useState<string>(""); // Holds the input message
  const { getconvertion, SendMsg, getUserFriends } = useApiContext();
  const [friend, setFriend] = useState<any>([]);
  // Fetch chat history when component mounts
  const getChat = async () => {
    try {
      // Fetch the conversion messages
      let res = await getconvertion({ reciverId: conversation });
      // Fetch user friends
      let fridata = await getUserFriends();

      if (Array.isArray(fridata) && fridata.length > 0) {
        let friendData: any = fridata.filter(
          (item) => item._id === conversation
        );

        if (friendData.length > 0) {
          setFriend(friendData);
        } else {
          console.log("No friend found for the given conversation ID.");
        }
      } else {
        console.error("No friends data found or fridata is not an array");
      }

      // Set the messages from the conversion API response
      setMessages(res?.msg);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  useEffect(() => {
    getChat(); // Get chat history on initial load
  }, [conversation]);

  // Scroll to the latest message when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Join the room when the component mounts
  useEffect(() => {
    if (conversation) {
      socket.emit("join_room", conversation); // Joining the room with the conversationId as roomId
    }

    // Listen for new messages coming from the server
    socket.on("receive_message", (data) => {
      console.log("New message received:", data);

      // Only update the messages if the message belongs to the current conversation
      if (data.receiver === conversation || data.sender === conversation) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message: data.message,
            senderId: data.sender,
            receiverId: data.receiver,
            timestamp: data.timestamp,
          },
        ]);
      }
    });

    // Cleanup on unmount
    return () => {
      socket.off("receive_message");
    };
  }, [conversation]);

  // Send message function
  const handleSend = (e: string): void => {
    if (e.trim()) {
      const newMessage = {
        message: e,
        senderId: userinfo?._id,
        receiverId: conversation, // Assuming receiverId is the conversation ID
      };

      // Emit to the backend to save the message and broadcast to the receiver
      socket.emit("send_message", newMessage);
      getChat();
      setMessage(""); // Clear the input field after sending
    }
  };

  // Handle emoji selection
  const handleEmojiSelect = (selectedEmoji: EmojiType) => {
    const emojiMessage = `<img src="${selectedEmoji.url}" alt="emoji" class="w-full h-full inline-block" />`;
    handleSend(emojiMessage);
    setShowPicker(false); // Hide emoji picker
  };

  // Handle file upload (if necessary)
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Handle file upload here if necessary
  };

  // For searching
  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(true);

  // Handle wallpaper (background customization)
  const wallpaperInputRef = useRef<HTMLInputElement>(null);
  const [wallpaper, setWallpaper] = useState<string>("");
  const [showWallpaperModal, setShowWallpaperModal] = useState(false);
  const [customColor, setCustomColor] = useState<string>("#000000");

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

  const handleEdit = (msg: any) => {
    // Handle edit logic here
  };

  const handleCopy = (msg: any) => {
    navigator.clipboard.writeText(msg.text);
    successToast("Copied to clipboard!");
  };

  const handleDelete = (msgId: number) => {
    // Handle delete logic here
  };

  return (
    <motion.div
      className={`flex h-screen transition-all duration-300 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
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
          <SearchModal setSearch={setSearch} />
        ) : (
          <Header
            setSearch={setSearch}
            handleSearch={handleSearch}
            onAvatarClick={() => setSidebarOpen(true)}
            friendData={friend[0]}
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
          {/* Render messages */}
          <AnimatePresence>
            {messages?.map((msg, index) => (
              <Message
                key={index} // Use timestamp as a unique key
                message={msg}
                isOwnMessage={msg.sender === userinfo?._id}
                handleEdit={handleEdit}
                handleCopy={handleCopy}
                handleDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
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
          setSidebarOpen={setSidebarOpen}
          friendData={friend[0]}

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
