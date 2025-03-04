import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSidebar } from "../Context/context";
import { X } from "lucide-react";

const PersonalInfo = ({
  conversation,
  setSidebarOpen,
  sharedMedia,
  sharedLinks,
  sharedDocs,
  setShowWallpaperModal,
  showWallpaperModal,
  handleColorChange,
  setCustomColor,
  handleWallpaperUpload,
  wallpaperInputRef,
}: {
  sharedMedia: string[];
  sharedLinks: string[];
  sharedDocs: { name: string; url: string }[];
  conversation: any;
  setSidebarOpen: any;
  setShowWallpaperModal: any;
  showWallpaperModal: boolean;
  handleColorChange: any;
  setCustomColor: any;
  handleWallpaperUpload: any;
  wallpaperInputRef: any;
}) => {
  const { setIsmodel, setSelectedImage } = useSidebar();

  const openImageModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setIsmodel(true);
  };
  const [activeTab, setActiveTab] = useState("media");
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="w-1/3  p-6 shadow-lg  relative"
    >
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
                activeTab === tab ? "text-white border-b-2 border-blue-400" : ""
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
                className=" bg-zinc-700 p-3 rounded-lg flex items-center gap-3 hover:bg-zinc-600 transition"
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
      <div className="py-5 relative flex flex-col gap-3">
        <button
          onClick={() => setShowWallpaperModal(true)}
          className="bg-blue-500 px-4 py-2 mt-2 rounded-md text-white"
        >
          Change Wallpaper
        </button>
        <button className="bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700 transition">
          🚨 Block & Report
        </button>
      </div>
      {showWallpaperModal && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-80 text-white relative">
            <button
              onClick={() => setShowWallpaperModal(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>

            <h2 className="text-lg font-semibold mb-4">Change Wallpaper</h2>
            <h3 className="text-sm text-gray-400 mb-2">Choose a Color</h3>
            <div className="flex gap-3 flex-wrap mb-4">
              {[
                "#1E1E1E",
                "#091E427D",
                "#2C3E5D",
                "#B3B9C4",
                "#2C333A",
                "#C3DEFE33",
              ].map((color) => (
                <button
                  key={color}
                  className="w-10 h-10 rounded-full border-2 border-gray-400"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>

            <h3 className="text-sm text-gray-400 mb-2">Pick a Custom Color</h3>
            <input
              type="color"
              onChange={(e: any) => {
                setCustomColor(e.target.value);
                handleColorChange(e.target.value);
              }}
              className="w-full h-10 border-none bg-transparent cursor-pointer"
            />
            <button
              onClick={() => wallpaperInputRef.current?.click()}
              className="bg-blue-500 w-full mx-auto px-4 py-2 rounded-md mt-3 text-white flex items-center justify-center gap-2"
            >
              📷 Upload Image
            </button>
            <input
              type="file"
              ref={wallpaperInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleWallpaperUpload}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PersonalInfo;
