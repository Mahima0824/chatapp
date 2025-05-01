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
  setTypingUsers,
  typingUsers,
}: any) => {
  const [messages, setMessages] = useState<any[]>([]); // Holds all messages in the conversation
  const [newestMessageId, setNewestMessageId] = useState<number | null>(null); // Tracks the most recent message
  const [showPicker, setShowPicker] = useState<boolean>(false); // For emoji picker toggle
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // For toggling sidebar
  const messagesEndRef = useRef<any>(null); // To scroll to the latest message
  const { theme } = useTheme();
  const socketRef = useRef<any>(null); // Store socket reference

  const [fileurl, setFileurl] = useState<any>();
  const [message, setMessage] = useState<string>(""); // Holds the input message
  const { getconvertion, getUserFriends, onlineuserupdate } = useApiContext();
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
    socketRef.current = io("http://localhost:5000", {
      withCredentials: true,
    });

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

    // receive
    socketRef.current.on("receiveMessage", (newMessage: any) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the chat
    });

    // send
    socketRef.current.on("messageSent", (newMessage: any) => {
      console.log("Message sent:", newMessage);
    });

    // delete message
    socketRef.current.on("messageDeleted", ({ messageIds }: any) => {
      setMessages((prev) =>
        prev.filter((msg) => !messageIds.includes(msg._id))
      );
      console.log("Messages deleted:", messageIds);
    });

    // typing.....
    socketRef.current.on("typingUser", (userId: any) => {
      setTypingUsers(userId);
      setTimeout(() => {
        setTypingUsers(null);
      }, 1200);
    });

    let data = { senderId: userinfo?._id, receiverId: conversation };
    socketRef.current.emit("messageSeen", data);

    // mark
    socketRef.current.on("messageSeenSend", (data: any) => {
      console.log("Messages marked as seen for:");
    });

    // edit message
    socketRef.current.on("messageEdited", ({ messageId, newMessage }: any) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === messageId ? { ...msg, message: newMessage } : msg
        )
      );
    });

   
    // Clean up socket event listeners when component unmounts
    return () => {
      socketRef.current.off("receiveMessage");
      socketRef.current.off("messageSent");
      socketRef.current.off("chatHistory");
      socketRef.current.off("typingUser");
      socketRef.current.off("messageEdited");

      socketRef.current.disconnect(); // Disconnect the socket when component is unmounted
    };
  }, [conversation, onlineuserupdate]); // Empty dependency array ensures this useEffect runs only once when the component mounts

  // Send message function
  const handleSend = async (e: any) => {
    if (!e.trim()) return;

    const newMessage = {
      senderId: userinfo?._id,
      receiverId: conversation,
      message: e,
      fileUrl: "", // You can handle file uploads here if needed
    };

    socketRef.current.emit("sendMessage", newMessage);

    setMessage(""); // Clear input field after sending the message

    // // Scroll to bottom of messages after sending
    messagesEndRef?.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Handle emoji selection
  const handleEmojiSelect = (selectedEmoji: EmojiType) => {
    const emojiMessage = `<img src="${selectedEmoji.url}" alt="emoji" class="w-full h-full inline-block" />`;
    handleSend(emojiMessage);
    setShowPicker(false); // Hide emoji picker
  };

  // Handle file upload (if necessary)
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Upload file to Cloudinary via your backend
      // const response = await fetch("http://localhost:5000/api/v1/uploadFiles", {
      //   method: "POST",
      //   body: formData,
      // });

      // const data = await response.json();

      // if (!data.fileUrl) {
      //   console.error("File upload failed");
      //   return;
      // }

      // Create message object with Cloudinary file URL
      // const newMessage = {
      //   senderId: userinfo?._id,
      //   receiverId: conversation,
      //   message: "",
      //   file: data.fileUrl, // Attach file data
      // };

      // Emit message via Socket.io
      // socketRef.current.emit("sendMessage", newMessage);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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

  const handleEdit = (editingMessage: any) => {
    if (!editingMessage || !editingMessage.newMessage) return;

    const updatedMessage = {
      messageId: editingMessage.messageId,
      newMessage: editingMessage.newMessage,
      userId: userinfo?._id,
      senderId: conversation,
    };

    socketRef.current.emit("editMessage", updatedMessage);
  };

  const handleCopy = (msg: any) => {
    navigator.clipboard.writeText(msg);
    // successToast("Copied to clipboard!");
  };

  const handleDelete = (msgId: number) => {
    const data = {
      messageIds: [msgId],
      userId: userinfo?._id,
      senderId: conversation,
    };
    socketRef.current.emit("deleteMessage", data);
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
            typingUsers={typingUsers == userinfo?._id}
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
            {typingUsers !== conversation && typingUsers !== null && (
              <p className="bg-slate-600 w-max px-2 py-1 rounded-xl text-yellow-300">
                typing....
              </p>
            )}
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
              userId: conversation,
              otherUserId: userinfo?._id,
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
