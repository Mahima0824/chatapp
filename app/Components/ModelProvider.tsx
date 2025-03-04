"use client";
import React from "react";
import VideoCallModal from "./VideoCallModal";
import VoiceCallModal from "./VoiceCallModal";
import ProfileModal from "./ProfileModal";
import ImgModal from "./ImgModal";
import EditModal from "./EditModal";
import SettingModal from "./SettingModal";

function ModelProvider() {
  return (
    <React.Fragment>
      <VideoCallModal />
      <VoiceCallModal />
      <ProfileModal />
      <ImgModal />
      <EditModal />
      <SettingModal />
    </React.Fragment>
  );
}

export default ModelProvider;
