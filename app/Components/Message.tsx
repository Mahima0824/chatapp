import { cubicBezier, motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { useSidebar } from "../Context/context";
import { IoCheckmark, IoCheckmarkDone, IoSendOutline } from "react-icons/io5";
import useFormattedDate, { useFormattedDateLastseen } from "@/lib/timeconvert";

interface MessageProps {
  message: any;
  isOwnMessage: boolean;
  isNewestMessage: boolean;
  setNewestMessageId: (id: number | null) => void;
  handleEdit: (msg: MessageProps["message"]) => void;
  handleCopy: (msg: MessageProps["message"]) => void;
  handleDelete: (msgId: number) => void;
}

const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

const Message = ({
  message,
  isOwnMessage,
  isNewestMessage,
  setNewestMessageId,
  handleEdit,
  handleCopy,
  handleDelete,
}: any) => {
  const isEmojiOnly = /^<img src=".*?" alt="emoji".*?>$/.test(message.text);
  const isImage = message.file && message.file.type.startsWith("image/");
  const isPdf = message.file && message.file.type === "application/pdf";
  const { setIsmodel, setSelectedImage } = useSidebar();
  const openImageModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setIsmodel(true);
  };

  const [editingMessage, setEditingMessage] = useState<any>(null);

  const handleEditintter = (msg: any) => {
    setEditingMessage({ id: msg._id, text: msg.message }); // Store message being edited
  };

  useEffect(() => {
    if (isNewestMessage) {
      setTimeout(() => {
        setNewestMessageId(null);
      }, 1000);
    }
  }, [isNewestMessage, setNewestMessageId]);

  const { formatted } = useFormattedDateLastseen(message.createdAt);
  return (
    <motion.div
      initial={
        isNewestMessage
          ? {
              opacity: 0,
              y: isOwnMessage ? 250 : -250,
              x: isOwnMessage ? -250 : 250,
            }
          : {}
      }
      animate={isNewestMessage !== null ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={
        isNewestMessage !== null ? { duration: 0.5, ease: easing } : {}
      }
      className={`flex flex-col relative w-full ${
        isOwnMessage ? "justify-end items-end" : "justify-start items-start"
      } my-5`}
    >
      <Menu
        as="div"
        className="relative  group max-w-[90%] cursor-pointer rounded-lg"
      >
        <div
          className={`p-3 w-auto rounded-lg  flex items-center gap-3 shadow-md transition-all
             ${
               isOwnMessage
                 ? "bg-blue-500 text-white"
                 : "bg-gray-100 text-black"
             }
            ${isEmojiOnly || isImage || isPdf ? "bg-transparent" : ""}`}
        >
          <div>
            {isEmojiOnly ? (
              <span
                dangerouslySetInnerHTML={{ __html: message.message }}
                className="w-20 h-20 block object-center object-cover"
              ></span>
            ) : isPdf ? (
              <div className="flex items-center gap-3">
                <FileText className="text-red-500 w-8 h-8" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {message.file?.name}
                  </p>
                  <a
                    href={message.file?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-sm"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            ) : isImage ? (
              <img
                src={message.file?.url}
                alt={message.file?.name || "Uploaded file"}
                className="rounded cursor-pointer"
                style={{
                  maxWidth: message.file?.width
                    ? `${message.file.width}px`
                    : "200px",
                  maxHeight: message.file?.height
                    ? `${message.file.height}px`
                    : "200px",
                }}
                onClick={() => openImageModal(message.file!.url)}
              />
            ) : editingMessage?.id === message._id ? (
              <input
                type="text"
                value={editingMessage.text}
                onChange={(e) =>
                  setEditingMessage(
                    (prev: any) => prev && { ...prev, text: e.target.value }
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEdit({
                      messageId: editingMessage.id,
                      newMessage: editingMessage.text,
                    });
                    setEditingMessage(null); // Reset after saving
                  }
                }}
                onBlur={() => {
                  handleEdit({
                    messageId: editingMessage.id,
                    newMessage: editingMessage.text,
                  });
                  setEditingMessage(null);
                }}
                className="bg-gray-200 text-yellow-400 p-1 rounded"
              />
            ) : (
              <p dangerouslySetInnerHTML={{ __html: message.message }}></p>
            )}
          </div>

          {isOwnMessage && (
            <Menu.Button className="opacity-100 text-xs text-gray-300">
              <FaChevronDown />
            </Menu.Button>
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute z-[99999]  mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-[#2A2A36] shadow-lg ring-1 ring-black/5 focus:outline-none text-white`}
          >
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleCopy(message.message)}
                    className={`${
                      active ? "bg-blue-500 text-white" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Copy
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleEditintter(message)}
                    className={`${
                      active ? "bg-yellow-500 text-white" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleDelete(message._id)}
                    className={`${
                      active ? "bg-red-600 text-white" : ""
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="flex items-center gap-1 text-xs text-gray-300 mt-1 text-right">
        <p className="">{formatted}</p>
        <span className="timestamp">
          {message.seen ? <IoCheckmarkDone /> : <IoSendOutline />}
        </span>
      </div>
    </motion.div>
  );
};

export default Message;
