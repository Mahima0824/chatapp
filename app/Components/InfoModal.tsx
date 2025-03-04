import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useRef, useEffect } from "react";
import { FaSearch, FaTrash, FaBan, FaFlag, FaEllipsisH } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

interface SearchTypes {
  search?: boolean;
  setSearch?: any;
  handleSearch?: () => void;
  onAvatarClick?: () => void;
}

const InfoModal: React.FC<SearchTypes> = ({ handleSearch, onAvatarClick }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

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
              <Menu.Button className="flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all">
                <HiDotsVertical aria-hidden="true" />
              </Menu.Button>
            </div>
            {!isMoreOpen && (
              <Menu.Items className="absolute z-[99] right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-[#2A2A36] shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleSearch}
                        className={`${
                          active
                            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                            : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <FaSearch className="mr-2" /> Search
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                            : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <FaTrash className="mr-2" /> Clear Chat
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={onAvatarClick}
                        className={`${
                          active
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                            : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Disappearing Messages
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={onAvatarClick}
                        className={`${
                          active
                            ? "bg-gradient-to-r from-red-600 to-red-400 text-white"
                            : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Mute Notifications
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
                        className={`${
                          active
                            ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white"
                            : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
          className="absolute z-[100] right-0 mt-2 w-48 bg-[#1F1F2B] shadow-lg rounded-md"
        >
          <div className="px-1 py-1">
            <button
              onClick={() => setIsMoreOpen(false)}
              className="w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700"
            >
              Back
            </button>
            <button className="w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700">
              Block
            </button>
            <button className="w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700">
              Report
            </button>
            <button
              onClick={onAvatarClick}
              className="w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700"
            >
              Wallpaper
            </button>
            <button
              className="w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700"
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
