"use client";

import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  videomodel: boolean;
  voicemodel: boolean;
  profilemodel: boolean;
  imgmodel: boolean;
  setVoicemodel: React.Dispatch<React.SetStateAction<boolean>>;
  setVideomodel: React.Dispatch<React.SetStateAction<boolean>>;
  setProfilemodel: React.Dispatch<React.SetStateAction<boolean>>;
  setIsmodel: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string | boolean | number | undefined | null | any;
  setMsg: React.Dispatch<React.SetStateAction<any>>;
  selectedImage: string;
  setSelectedImage: (imgUrl: string) => void;
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
  const [profilemodel,setProfilemodel] = useState(false);
  const [imgmodel,setIsmodel] = useState(false)
  const [selectedImage, setSelectedImage] = useState("");


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
        setIsmodel,selectedImage, setSelectedImage
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
