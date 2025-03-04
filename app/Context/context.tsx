"use client";

import { createContext, useContext, useState } from "react";

interface MessageType {
  id: number;
  text: string;
  sender: "sender" | "receiver";
  time: string;
  conversationId: string;
  date: string;
  file?: {
    name: string;
    type: string;
    url: string;
  } | null;
}
interface SidebarContextProps {
  videomodel: boolean;
  voicemodel: boolean;
  profilemodel: boolean;
  imgmodel: boolean;
  wallpapermodel: boolean;
  editmodel: boolean;
  settingmodel: boolean;
  setVoicemodel: React.Dispatch<React.SetStateAction<boolean>>;
  setVideomodel: React.Dispatch<React.SetStateAction<boolean>>;
  setProfilemodel: React.Dispatch<React.SetStateAction<boolean>>;
  setIsmodel: React.Dispatch<React.SetStateAction<boolean>>;
  setWallpapermodel: React.Dispatch<React.SetStateAction<boolean>>;
  setEditmodel: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingmodel: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string | boolean | number | undefined | null | any;
  setMsg: React.Dispatch<React.SetStateAction<any>>;
  selectedImage: string;
  setSelectedImage: (imgUrl: string) => void;
  deletemodel: boolean;
  setDeletemodel: (value: boolean) => void;
  messageToDelete: number | null;
  setMessageToDelete: (id: number | null) => void;
  messagess: MessageType[];
  setMessagess: React.Dispatch<React.SetStateAction<MessageType[]>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const Usemodel: any = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videomodel, setVideomodel] = useState(false);
  const [voicemodel, setVoicemodel] = useState(false);
  const [msg, setMsg] = useState();
  const [profilemodel, setProfilemodel] = useState(false);
  const [imgmodel, setIsmodel] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [wallpapermodel, setWallpapermodel] = useState(false);
  const [editmodel, setEditmodel] = useState(false);
  const [deletemodel, setDeletemodel] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<number | null>(null);
  const [messagess, setMessagess] = useState<MessageType[]>([]); 
  const [settingmodel, setSettingmodel] = useState(false); 
  return (
    <SidebarContext.Provider
      value={{
        videomodel,
        voicemodel,
        setVoicemodel,
        setVideomodel,
        msg,
        setMsg,
        profilemodel,
        setProfilemodel,
        imgmodel,
        setIsmodel,
        selectedImage,
        setSelectedImage,
        wallpapermodel,
        setWallpapermodel,
        editmodel,
        setEditmodel,
        deletemodel,
        setDeletemodel,
        messageToDelete,
        setMessageToDelete,
        messagess,
        setMessagess,
        settingmodel,
         setSettingmodel
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
