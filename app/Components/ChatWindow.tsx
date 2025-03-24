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
  const socketRef = useRef<any>(null); // Store socket reference

  // typing
  const [typingUsers, setTypingUsers] = useState<string[]>([]); // Track users typing
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  console.log(typingUsers,'typingUsers')
  const [message, setMessage] = useState<string>(""); // Holds the input message
  const { getconvertion, getUserFriends } = useApiContext();
  const [friend, setFriend] = useState<any>([]);
  // Fetch chat history when component mounts

  // Fetch chat messages from the server
  const getChat = async () => {
    try {
      const res = await getconvertion({ reciverId: conversation });
      setMessages(res?.msg || []);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  const getFriend = async () => {
    const friends = await getUserFriends();
    const selectedFriend = friends.find((f: any) => f._id === conversation);
    if (selectedFriend) setFriend([selectedFriend]);
  };

  useEffect(() => {
    getChat();
    getFriend();

    // Initialize socket connection and emit "join" event only once
    socketRef.current = io("https://chatapp-backend-6i7e.onrender.com", { withCredentials: true });

    // Emit "join" event when component mounts to join the room
    socketRef.current.emit("join", {
      userId: userinfo?._id,
      otherUserId: conversation,
    });

    // Fetch chat history after joining the room
    socketRef.current.emit("getHistory", {
      userId: userinfo?._id,
      otherUserId: conversation,
    });

    socketRef.current.on("chatHistory", (historyMessages: any) => {
      if (Array.isArray(historyMessages)) {
        setMessages(historyMessages); // Update messages with chat history
      }
    });

    socketRef.current.on("receiveMessage", (newMessage: any) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the chat
    });

    socketRef.current.on("messageSent", (newMessage: any) => {
      console.log("Message sent:", newMessage);
    });

    // Clean up socket event listeners when component unmounts
    return () => {
      socketRef.current.off("receiveMessage");
      socketRef.current.off("messageSent");
      socketRef.current.off("chatHistory");
      socketRef.current.disconnect(); // Disconnect the socket when component is unmounted
    };
  }, [conversation]); // Empty dependency array ensures this useEffect runs only once when the component mounts

  useEffect(() => {
    socketRef.current.on("typingUser", (userId) => {
      console.log('object')
      if (!typingUsers.includes(userId)) {
        setTypingUsers((prev) => [...prev, userId]);
      }
    });

    socketRef.current.on("notTyping", (userId) => {
      setTypingUsers((prev) => prev.filter((id) => id !== userId));
    });
    return () => {
      socketRef.current.off("typingUser");
      socketRef.current.off("notTyping");
    };
  }, [typingUsers]);

  useEffect(() => {
    socketRef.current.on("onlineStatus", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socketRef.current.off("onlineStatus");
    };
  }, []);

  // seen ========
  const handleMessageSeen = (messageId: string) => {
    socketRef.current.emit("messageSeen", messageId);
  };

  useEffect(() => {
    socketRef.current.on("messageSeen", (messageId) => {
      // Mark the message as seen in the UI
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === messageId ? { ...msg, seen: true } : msg
        )
      );
    });

    return () => {
      socketRef.current.off("messageSeen");
    };
  }, []);

  // Send message function
  const handleSend = async (e: any) => {
    if (!e.trim()) return;

    const newMessage = {
      senderId: userinfo?._id,
      receiverId: conversation,
      message: e,
      fileUrl: "", // You can handle file uploads here if needed
    };

    console.log(newMessage, "newMessage");

    // Emit "sendMessage" to the server
    socketRef.current.emit("sendMessage", newMessage);

    setMessage(""); // Clear input field after sending the message

    // // Scroll to bottom of messages after sending
    // messagesEndRef?.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "end",
    // });
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
                isOwnMessage={msg.senderId === userinfo?._id}
                handleEdit={handleEdit}
                handleCopy={handleCopy}
                handleDelete={handleDelete}
              />
            ))}
            {typingUsers ?? <p>typing....</p>}
            {onlineUsers}:"online status"
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
        <ChatInput
          handleEmojiSelect={handleEmojiSelect}
          handleFileUpload={handleFileUpload}
          handleSend={handleSend}
          message={message}
          onchange={() =>
            socketRef.current.emit("typing", {
              senderId: userinfo?._id,
            })
          }
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
