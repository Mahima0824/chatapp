"use client";

import { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FaHeart } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { SuggestFriend } from "./SuggestFriend";

interface StatusUpdate {
  id: string;
  user: string;
  status: string;
  time: string;
  avatar: string;
  media?: string;
  type: "image" | "video";
}

interface StatusWindowProps {
  statusUpdates: StatusUpdate[];
}

const StatusWindow: React.FC<StatusWindowProps> = ({ statusUpdates }) => {
  const [selectedStatusIndex, setSelectedStatusIndex] = useState<number | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (selectedStatusIndex !== null) {
      setIsOpen(true);
      setIsLiked(false);
      const timer = setTimeout(() => {
        if (selectedStatusIndex < statusUpdates.length - 1) {
          setSelectedStatusIndex((prev) => (prev !== null ? prev + 1 : null));
        } else {
          setIsOpen(false);
          setSelectedStatusIndex(null);
        }
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [selectedStatusIndex]);

  return (
    <div className="p-4  border-t min-h-screen overflow-y-auto border-gray-700">
      <h2 className="text-lg font-semibold text-gray-200 mb-2">
        Status Updates
      </h2>
      <div className="flex gap-4 overflow-x-auto">
        {statusUpdates.map((status, index) => (
          <div
            key={status.id}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => setSelectedStatusIndex(index)}
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="w-16 h-16 rounded-full border-2 border-green-500"
            >
              <img
                src={status.avatar}
                alt={status.user}
                className="w-full h-full rounded-full"
              />
            </motion.div>
            <p className="text-xs text-gray-400 mt-1">{status.time}</p>
          </div>
        ))}
      </div>
           <SuggestFriend />  

      <Transition appear show={isOpen} as={Fragment}>
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <Transition.Child
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-[90%] max-w-lg bg-black rounded-lg shadow-lg"
          >
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedStatusIndex(null);
              }}
              className="absolute top-3 right-3 text-white bg-gray-800 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-3 left-3 right-3 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-green-500"
              />
            </div>

            <div className="p-5 flex flex-col h-screen w-full items-center">
              {selectedStatusIndex !== null && (
                <>
                  {statusUpdates[selectedStatusIndex].type === "video" ? (
                    <video
                      src={statusUpdates[selectedStatusIndex].media}
                      className="w-full rounded-lg h-full object-cover"
                      autoPlay
                      loop
                      controls
                    />
                  ) : (
                    <img
                      src={statusUpdates[selectedStatusIndex].media}
                      alt="Status"
                      className="w-full rounded-lg h-full object-cover"
                    />
                  )}

                  <p className="text-gray-200 text-lg mt-4">
                    {statusUpdates[selectedStatusIndex].status}
                  </p>
                  <div className="self-start flex items-center gap-3 mt-7 w-full">
                    <PlaceholdersAndVanishInput
                      placeholders={["Type a message..."]}
                      onChange={(e: any) => console.log(e.target.value)}
                      onSubmit={() => console.log("submit")}
                    />
                    <motion.button
                      onClick={() => setIsLiked(!isLiked)}
                      whileTap={{ scale: 0.8 }}
                      animate={{
                        scale: isLiked ? [1, 1.3, 1] : 1,
                        color: isLiked ? "#ff0000" : "#ccc",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-2xl"
                    >
                      <FaHeart />
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Transition>
   
    </div>
  );
};

export default StatusWindow;
