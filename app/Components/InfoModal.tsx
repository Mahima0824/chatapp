import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { FaSearch, FaTrash, FaEllipsisH } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { useTheme } from "../Context/ThemeContext";

interface SearchTypes {
  search?: boolean;
  setSearch?: any;
  handleSearch?: () => void;
  onAvatarClick?: () => void;
}

const InfoModal: React.FC<SearchTypes> = ({ handleSearch, onAvatarClick }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    }

    if (isMoreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreOpen]);

  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        {({ close }) => (
          <>
            <div>
              <Menu.Button
                className={`flex items-center justify-center gap-2 w-8 h-8 transition-all rounded-full shadow-md 
                        ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-blue-100 text-[#05445E] hover:bg-blue-200"} 

                  `}
              >
                <HiDotsVertical aria-hidden="true" />
              </Menu.Button>
            </div>

            {!isMoreOpen && (
              <Menu.Items
                className={`absolute z-[99] right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none transition-all ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleSearch}
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm transition ${
                          active
                            ? theme === "dark"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-300 text-black"
                            : ""
                        }`}
                      >
                        <FaSearch className="mr-2" /> Search
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm transition ${
                          active
                            ? theme === "dark"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-300 text-black"
                            : ""
                        }`}
                      >
                        <FaTrash className="mr-2" /> Clear Chat
                      </button>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          close();
                          setIsMoreOpen(true);
                        }}
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm transition ${
                          active
                            ? theme === "dark"
                              ? "bg-gray-700 text-white"
                              : "bg-gray-300 text-black"
                            : ""
                        }`}
                      >
                        <FaEllipsisH className="mr-2" /> More
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>

      {isMoreOpen && (
        <div
          ref={moreMenuRef}
          className={`absolute z-[100] right-0 mt-2 w-48 shadow-lg rounded-md transition-all ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <div className="px-1 py-1">
            <button
              onClick={() => setIsMoreOpen(false)}
              className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition"
            >
              Back
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition">
              Block
            </button>
            <button className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition">
              Report
            </button>
            <button
              onClick={onAvatarClick}
              className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition"
            >
              Wallpaper
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-700 transition"
              onClick={onAvatarClick}
            >
              Media, Links, and Docs
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoModal;
