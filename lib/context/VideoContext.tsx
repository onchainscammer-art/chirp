"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface VideoContextType {
  isVideoLoading: boolean;
  setVideoLoading: (loading: boolean) => void;
  isVideoPlaying: boolean;
  setVideoPlaying: (playing: boolean) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <VideoContext.Provider value={{
      isVideoLoading,
      setVideoLoading: setIsVideoLoading,
      isVideoPlaying,
      setVideoPlaying: setIsVideoPlaying
    }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideoContext() {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
}
