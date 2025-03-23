import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { useApiContext } from "../Context/Api";

const Person = ({ conversation, onClick }: any) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`w-full p-3 cursor-pointer rounded-lg  transition-all duration-200 ${
        theme === "dark" ? "hover:bg-[#222222]" : "hover:bg-[#ffffff20]"
      }`}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar
            className={`w-12 h-12 border-[3px] p-[2px] rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-gray-700 to-gray-900 border-white"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 border-[#05445E]"
            }`}
          >
            <div
              className={`w-full h-full rounded-full p-[2px] ${
                theme === "dark" ? "bg-gray-800" : "bg-black"
              }`}
            >
              <AvatarImage
                src={
                  conversation?.image
                    ? conversation?.image
                    : "https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                }
                alt={conversation?.username}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Avatar>
          <div
            className={`w-3 h-3 right-1 bottom-0 z-40 absolute rounded-full border-2 ${
              theme === "dark" ? "border-gray-800" : "border-black"
            } 
            ${conversation?.onlineStatus ? "bg-green-500" : "bg-red-700"}    `}
          />
        </div>

        <div className="flex-1">
          <h4
            className={`text-base font-semibold ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            {conversation?.username}
          </h4>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-slate-500"
            }`}
          >
            {conversation?.lastSeen}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Person;


export const SerchPerson = ({
  conversation,
  onClick,
  useData,
  searchfriendfn,
}: any) => {
  const { theme } = useTheme();

  console.log(conversation, "usedata", useData);
  const { friendRes } = useApiContext();

  const [status, setStatus] = useState("");

  useEffect(() => {
    conversation.friendRequests.includes(useData?._id)
      ? setStatus("paddding...")
      : conversation.friends.includes(useData?._id)
      ? setStatus("Unfollow")
      : useData.friendRequests.includes(conversation?._id)
      ? setStatus("accept")
      : setStatus("follow");
  }, [conversation, useData]);

  const hadlingsendres = async () => {
    let typeset =
      status === "paddding..."
        ? "send-remove"
        : status === "Unfollow"
        ? "remove-friend"
        : status === "accept"
        ? "accept"
        : "send";

    // Make the API call with the correct type and data
    let res = await friendRes({
      type: typeset,
      data: { receiverId: conversation?._id },
    });

    searchfriendfn();
  };

  const rejectApi = async () => {
    let res = await friendRes({
      type: "reject",
      data: { receiverId: conversation?._id },
    });

    searchfriendfn();
  };

  return (
    <div
      className={`w-full p-3 cursor-pointer rounded-lg  transition-all duration-200   `}
    >
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar
            className={`w-12 h-12 border-[3px] p-[2px] rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-gray-700 to-gray-900 border-white"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 border-[#05445E]"
            }`}
          >
            <div
              className={`w-full h-full rounded-full p-[2px] ${
                theme === "dark" ? "bg-gray-800" : "bg-black"
              }`}
            >
              <AvatarImage
                src={
                  conversation?.image
                    ? conversation?.image
                    : "https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                }
                alt={conversation?.username}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Avatar>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4
              className={`text-base font-semibold ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              {conversation?.username}
            </h4>
            <span
              className={`text-sm ${
                theme === "dark" ? "text-green-600" : "text-slate-500"
              } capitalize`}
            >
              Followers {conversation?.friends.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={hadlingsendres}
              className="bg-[#111111] px-3 py-2 rounded-full capitalize"
            >
              {status}
            </button>

            {status === "accept" && (
              <button
                onClick={() => rejectApi()}
                className="bg-[#111111] px-3 py-2 rounded-full capitalize"
              >
                remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
