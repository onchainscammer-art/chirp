import { useState, useEffect, useRef, useCallback } from 'react';

interface UseAudioOptions {
  loop?: boolean;
  volume?: number;
  autoChirpInterval?: number; // milliseconds between chirps
  paused?: boolean; // external pause signal (e.g., during video playback)
}

interface UseAudioReturn {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
  play: () => Promise<void>;
  pause: () => void;
}

export function useAudio(
  audioSrc: string,
  options: UseAudioOptions = {}
): UseAudioReturn {
  const { loop = false, volume = 0.5, autoChirpInterval = 3000, paused = false } = options;

  const [isMuted, setIsMuted] = useState(false); // Start unmuted for auto-play
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio element
  useEffect(() => {
    if (typeof window === 'undefined') return;

    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = volume;
    audioRef.current.loop = loop;

    // Load mute preference from localStorage
    const savedMuteState = localStorage.getItem('chirp-audio-muted');
    if (savedMuteState !== null) {
      setIsMuted(JSON.parse(savedMuteState));
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [audioSrc, volume, loop]);

  const play = useCallback(async () => {
    if (audioRef.current && !isMuted) {
      try {
        audioRef.current.currentTime = 0; // Reset to start
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Audio play failed:', error);
      }
    }
  }, [isMuted]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    if (typeof window !== 'undefined') {
      localStorage.setItem('chirp-audio-muted', JSON.stringify(newMuteState));
    }
  }, [isMuted]);

  // Set up periodic chirping
  useEffect(() => {
    if (!isMuted && !paused && audioRef.current) {
      // Play immediately when unmuted and not paused
      play();

      // Set up interval for periodic chirps
      intervalRef.current = setInterval(() => {
        play();
      }, autoChirpInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      pause();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMuted, paused, autoChirpInterval, play, pause]);

  return {
    isMuted,
    isPlaying,
    toggleMute,
    play,
    pause,
  };
}
