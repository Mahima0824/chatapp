import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Paperclip, Smile } from "lucide-react";
import { Picker } from "ms-3d-emoji-picker";
import React, { useEffect, useRef, useState } from "react";

const ChatInput = ({
  handleEmojiSelect,
  handleFileUpload,
  handleSend,
  message,
}: {
  handleEmojiSelect: any;
  handleFileUpload: any;
  message: any;
  handleSend: any;
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>(message);

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
    <div className="sticky bottom-0 border-t border-gray-700 bg-zinc-900 p-4">
      <div className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg relative">
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
           
            onChange={(e: any) => setInputMessage(e.target.value)}
            onSubmit={() => {
              handleSend(inputMessage);
              setInputMessage(""); 
            }}
            arrow={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
