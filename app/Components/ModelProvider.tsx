"use client"
import React from 'react'
import VideoCallModal from './VideoCallModal'
import VoiceCallModal from './VoiceCallModal'
import ProfileModal from './ProfileModal'
import ImgModal from './ImgModal'

function ModelProvider() {
  
  return (
   
    <React.Fragment>
        <VideoCallModal />
        <VoiceCallModal />
        <ProfileModal />
        <ImgModal />
    </React.Fragment>
  )
}

export default ModelProvider
