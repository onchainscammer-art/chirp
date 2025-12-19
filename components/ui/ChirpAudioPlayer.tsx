"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/hooks/useAudio";
import { useVideoContext } from "@/lib/context/VideoContext";

export function ChirpAudioPlayer() {
  const { isVideoLoading, isVideoPlaying } = useVideoContext();
  const { isMuted, toggleMute } = useAudio("/audio/chirp.mp3", {
    volume: 0.4,
    autoChirpInterval: 3000, // Chirp every 3 seconds
    paused: isVideoLoading || isVideoPlaying, // Pause during video loading or playback
  });

  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenPrompt = localStorage.getItem('chirp-audio-prompt-seen');
    if (!hasSeenPrompt) {
      setShowPrompt(true);
      localStorage.setItem('chirp-audio-prompt-seen', 'true');

      // Auto-hide after 10 seconds
      setTimeout(() => setShowPrompt(false), 10000);
    }
  }, []);

  return (
    <>
      {/* Mute/Unmute Toggle Button */}
      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-20 right-4 z-50 glass-effect-strong p-3 rounded-full glow-border-amber hover:glow-amber transition-all duration-300"
        aria-label={isMuted ? "Unmute chirp sound" : "Mute chirp sound"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX className="w-5 h-5 text-chirp-text-secondary" />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
              className="animate-chirp-bounce"
            >
              <Volume2 className="w-5 h-5 text-chirp-amber" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* First-time visitor prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-32 right-4 z-40 glass-effect-strong rounded-lg p-4 max-w-xs shadow-xl glow-border-amber"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Volume2 className="w-5 h-5 text-chirp-amber" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-chirp-text-primary mb-2">
                  Authentic ceiling bird chirps enabled
                </p>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="text-xs text-chirp-amber hover:text-chirp-yellow transition-colors"
                >
                  Got it
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
