import { cubicBezier, motion } from "framer-motion";
import React from "react";
import { FileText } from "lucide-react";

interface MessageProps {
  message: {
    id: number;
    text: string;
    sender: "sender" | "receiver";
    time: string;
    file?: {
      name: string;
      type: string;
      url: any;
      width?: number;
      height?: number;
    } | null | undefined;
  };
  isOwnMessage: boolean;
}

const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const Message: React.FC<MessageProps> = ({ message, isOwnMessage }) => {
  const isEmojiOnly = /^<img src=".*?" alt="emoji".*?>$/.test(message.text);
  const isImage = message.file && message.file.type.startsWith("image/");
  const isPdf = message.file && message.file.type === "application/pdf";

  return (
    <motion.div
      initial={{ opacity: 0, y: isOwnMessage ? 250 : -250, x: isOwnMessage ? -250 : 250 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className={`flex flex-col relative w-full ${
        isOwnMessage ? "justify-end items-end" : "justify-start items-start"
      } my-2`}
    >
      {isEmojiOnly ? (
        <div>
          <span dangerouslySetInnerHTML={{ __html: message.text }} className="w-20 h-20 block object-cover"></span>
        </div>
      ) : isPdf ? (
        <div className="p-3 w-fit rounded-lg max-w-[75%] shadow-md bg-gray-100 flex items-center gap-3">
          <FileText className="text-red-500 w-8 h-8" />
          <div>
            <p className="text-sm font-medium text-gray-800">{message.file.name}</p>
            <a
              href={message.file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              Open PDF
            </a>
          </div>
        </div>
      ) : message.file ? (
        <div className="p-3 w-fit rounded-lg max-w-[75%] shadow-md bg-gray-200 text-black">
          <a href={message.file.url} target="_blank" rel="noopener noreferrer">
            <img
              src={message.file.url}
              alt={message.file.name}
              className="rounded"
              style={{
                maxWidth: message.file.width ? `${message.file.width}px` : "200px",
                maxHeight: message.file.height ? `${message.file.height}px` : "200px",
              }}
            />
          </a>
        </div>
      ) : (
        <div
          className={`p-3 w-fit rounded-lg max-w-[75%] shadow-md ${
            isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text }}></p>
        </div>
      )}

      <p className="text-xs text-gray-300 mt-1 text-right">{message.time}</p>
    </motion.div>
  );
};

export default Message;
