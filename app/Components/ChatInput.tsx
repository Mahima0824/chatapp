import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Paperclip, Smile } from "lucide-react";
import { Picker } from "ms-3d-emoji-picker";
import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const ChatInput = ({
  handleEmojiSelect,
  handleFileUpload,
  handleSend,
  message,
  onchange
}: {
  handleEmojiSelect: any;
  handleFileUpload: any;
  message: any;
  handleSend: any;
  onchange: any;
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>(message);
  const { theme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="sticky bottom-0 border-tp-4">
      <div
        className={`flex items-center gap-3 p-4
          ${
            theme === "dark"
              ? "glassBg border-gray-700 text-white"
              : "bg-white/30 border-gray-300 text-black backdrop-blur-lg shadow-md"
          }
          relative`}
      >
        <div ref={pickerRef} className="relative">
          <button
            onClick={() => setShowPicker(!showPicker)}
            className="p-2 rounded-lg hover:bg-zinc-700 transition"
          >
            <Smile className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
          {showPicker && (
            <div className="absolute bottom-12 left-0 bg-transparent shadow-lg rounded-lg z-50">
              <Picker isOpen={true} handleEmojiSelect={handleEmojiSelect} />
            </div>
          )}
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 rounded-lg hover:bg-zinc-700 transition"
        >
          <Paperclip className="w-6 h-6 text-gray-400 hover:text-white" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx,.txt,.jpg,.png"
        />

        <div className="flex-1">
          <PlaceholdersAndVanishInput
            placeholders={["Type a message..."]}
            onChange={(e: any) => {
              setInputMessage(e.target.value), onchange(e);
            }}
            onSubmit={() => {
              handleSend(inputMessage);
              setInputMessage("");
            }}
            arrow={false}
          />
        </div>
        <div>
          <button className="p-2 rounded-lg hover:bg-zinc-700 transition">
            <FaMicrophone className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
