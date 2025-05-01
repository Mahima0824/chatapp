"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import IconButton from "./Icon";
import Person, { SerchPerson } from "./Person";
import Group from "./Group";
import Calls from "./Calls";
import Status from "./Status";
import { useSidebar } from "../Context/context";
import { useTheme } from "../Context/ThemeContext";
import { cn } from "@/lib/utils";
import { useApiContext } from "../Context/Api";
import { io } from "socket.io-client";
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}

interface StatusUpdate {
  id: string;
  user: string;
  status: string;
  time: string;
  avatar: string;
  image?: string;
  type?: "video" | "image";
  viewed: boolean;
}

interface Call {
  id: string;
  name: string;
  time: string;
  type: "audio" | "video";
}

const Sidebar = ({
  conversations,
  statusUpdates,
  onSelectConversation,
  onSelectStatus,

  calls,
  onSelectCall,
  typingUsers,
}: any) => {
  const [activeTab, setActiveTab] = useState<string>("Chats");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setProfilemodel, setSettingmodel } = useSidebar();
  const [image, setImage] = useState<string | null>(null);
  const [grupImages, setGrupImages] = useState<any>();
  const {
    useData,
    getUser,
    createGroup,
    getAllUser,
    getUserFriends,
    onlineuserupdate,
    getGroup,
  } = useApiContext();
  const [friendlist, setFriendlist] = useState([]);
  const [serchfri, setSerchfri] = useState<any>([]);

  const socket = io("http://localhost:5000", {
    withCredentials: true,
  });
  const getuserData = async () => {
    const user = await getUser();
    const Friendlistres = await getUserFriends();
    setFriendlist(Friendlistres);
    setImage(user?.image || null);
  };

  const searchfriendfn = async () => {
    let fridata = await getAllUser();

    if (fridata.length > 0) {
      let fout = fridata
        .filter((item: any) => item.username.includes(searchTerm))
        .filter((item: any) => item._id !== useData._id);
      setSerchfri(fout);
    }
  };

  useEffect(() => {
    getuserData();
  }, [onlineuserupdate]);

  const { theme, toggleTheme } = useTheme();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchTerm("");
  };

  const friendReques = (e: any) => {
    console.log(e, "eeeeeeeeeeeeeeee");
  };

  useEffect(() => {
    socket.on("friend_request_received", ({ senderId }) => {
      getuserData();
    });

    return () => {
      socket.off("friend_request_received");
    };
  }, []);

  // Noticifation

  const [allusers, setAllusers] = useState([]);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<any>([]);
  const [groups, setGroups] = useState([]);

  const getAllUsers = async () => {
    let users = await getAllUser();
    setAllusers(users);
  };

  const getGroupchat = async () => {
    try {
      if (!useData?.groups || useData.groups.length === 0) {
        return;
      }

      let data = await getGroup(useData.groups);
      // setGroups(data);
      console.log("Fetched Group Chats:", data.groupChats);
    } catch (error) {
      console.error("Error fetching group chats:", error);
    }
  };

  useEffect(() => {
    getGroupchat();
  }, [activeTab]);

  useEffect(() => {
    getAllUsers(); // Fetch group chats when the component mounts or `isGroupModalOpen` changes
  }, [isGroupModalOpen]);

  const handleUserSelection = (user: any) => {
    setSelectedUsers((prev: any) =>
      prev.includes(user)
        ? prev.filter((u: any) => u !== user)
        : [...prev, user]
    );
  };

  const handleCreateGroup = async () => {
    if (!groupName || selectedUsers.length === 0) {
      alert("Please enter a group name and select users.");
      return;
    }
    await createGroup({
      name: groupName,
      users: [...selectedUsers, useData?._id],
      admin: useData?._id,
      isGroup: true,
      image: grupImages,
    });
    setIsGroupModalOpen(false);
    setGroupName("");
    setSelectedUsers([]);
  };

  const GrupInputRef = useRef<any>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setGrupImages(file);
    }
  };

  const handleImageClick = () => {
    if (GrupInputRef.current) {
      GrupInputRef.current.click();
    }
  };
  const [noticifationData, setNoticifationData] = useState([0]);
  const [noticifation, setNoticifation] = useState(false);
  const natification = () => {
    setNoticifation(true);
  };
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 h-screen w-[350px] p-5 shadow-lg transition-all ${
        theme === "dark" ? "glassBg" : "sidebar-light"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => setProfilemodel(true)}
        >
          <Avatar
            className={cn(
              "w-12 h-12 border-2 rounded-full",
              theme === "dark" ? "border-white" : "border-[#05445E]"
            )}
          >
            <AvatarImage
              src={
                useData?.image
                  ? useData?.image
                  : "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60"
              }
              className="w-full h-full object-cover"
              alt="User"
            />
          </Avatar>
          <span
            className={
              theme === "dark"
                ? "text-white"
                : "text-[#05445E] font-semibold text-lg"
            }
          >
            {useData?.username}
          </span>
        </motion.div>
        <div className="flex gap-3">
          <IconButton
            name="PiNotePencil"
            size={18}
            onClick={() => setProfilemodel(true)}
          />
          <IconButton
            name="IoSettings"
            size={18}
            onClick={() => setSettingmodel(true)}
          />
          <IconButton
            name={theme === "dark" ? "IoSunny" : "IoMoon"}
            size={18}
            onClick={toggleTheme}
          />

          <IconButton
            name={"IoNotificationsOutline"}
            size={18}
            onClick={natification}
          />
        </div>
      </div>

      <PlaceholdersAndVanishInput
        placeholders={["Search friend......"]}
        onChange={(e: any) => setSearchTerm(e.target.value)}
        onSubmit={(e: any) => searchfriendfn()}
        arrow={true}
      />

      <div className="flex justify-center mt-5 space-x-3">
        {["Chats", "Groups", "Status", "Calls"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              handleTabClick(tab), setNoticifation(false);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full transition-all",
              noticifation && "opacity-[.3]",
              activeTab === tab
                ? theme === "dark"
                  ? "bg-[#111111] text-white shadow-md"
                  : "bg-blue-300 text-[#05445E] shadow-md"
                : theme === "dark"
                ? "text-white"
                : "text-[#05445E]"
            )}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={
                  theme === "dark"
                    ? "absolute inset-0 bg-[#111111] rounded-full"
                    : "absolute inset-0 bg-blue-300 rounded-full"
                }
              />
            )}
            <span className="relative block text-sm">{tab}</span>
          </button>
        ))}
      </div>

      {noticifation ? (
        <div className="mt-5">
          <p className="border-b-2 mb-2 border-white text-yellow-300">
            Notifiation
          </p>

          {noticifationData.map((item, index) => {
            return (
              <>
                pac send request
                <br />
                dev acsept you res
              </>
            );
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5 space-y-3"
        >
          {activeTab === "Chats" && (
            <>
              {/* First list of friends (conversations) */}
              {serchfri?.length > 0 && (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-yellow-300">Serch result</p>

                    <p
                      onClick={() => setSerchfri([])}
                      className="capitalize cursor-pointer text-red-400"
                    >
                      clear
                    </p>
                  </div>
                  {serchfri?.map((conv: any) => (
                    <motion.div
                      className="border-b-2 border-dashed border-white"
                      key={conv?._id} // Unique key for each search result
                    >
                      <SerchPerson
                        conversation={conv}
                        onClick={friendReques}
                        useData={useData}
                        searchfriendfn={searchfriendfn}
                        getuserData={getuserData}
                      />
                    </motion.div>
                  ))}
                </>
              )}

              {/* Second list of friends (conversations) */}
              {friendlist.length > 0 &&
                friendlist?.map((conv: any) => (
                  <motion.div key={conv?._id} whileHover={{ scale: 1.03 }}>
                    <Person
                      conversation={conv}
                      onClick={() => onSelectConversation(conv?._id)}
                    />
                  </motion.div>
                ))}
            </>
          )}
          {activeTab === "Groups" && (
            <div>
              <button onClick={() => setIsGroupModalOpen(true)}>
                Create New Group
              </button>

              {isGroupModalOpen && (
                <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={GrupInputRef}
                    onChange={handleImageChange}
                  />
                  <label
                    className="mb-6 cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
                    onClick={handleImageClick}
                  >
                    <FaCamera className="text-lg" />
                    Upload Profile Picture
                  </label>
                  <div className="flex items-start justify-between">
                    <input
                      type="text"
                      value={groupName}
                      style={{ color: "black" }}
                      onChange={(e) => setGroupName(e.target.value)}
                      placeholder="Group Name"
                      className="w-full p-2 mb-3 !text-block border rounded"
                    />
                    <IoClose onClick={() => setIsGroupModalOpen(false)} />
                  </div>

                  <div>
                    {allusers?.map((user: any) => (
                      <div key={user._id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user._id)}
                          onChange={() => handleUserSelection(user._id)}
                        />
                        <span>{user.username}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleCreateGroup}
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Create Group
                  </button>
                </div>
              )}

              <div>
                {groups?.map((group: any) => (
                  <motion.div key={group._id} whileHover={{ scale: 1.03 }}>
                    <Group
                      conversation={group}
                      onClick={() => onSelectConversation(group)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Status" &&
            statusUpdates?.map((status: any) => (
              <motion.div key={status.id} whileHover={{ scale: 1.03 }}>
                <Status
                  status={status}
                  viewed={status.viewed}
                  onClick={() => onSelectStatus(status)}
                />
              </motion.div>
            ))}

          {activeTab === "Calls" &&
            calls?.map((call: any) => (
              <motion.div key={call.id} whileHover={{ scale: 1.03 }}>
                <Calls call={call} onClick={() => onSelectCall(call)} />
              </motion.div>
            ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
