"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useVideoContext } from "@/lib/context/VideoContext";

export function VideoSection() {
  const { setVideoLoading: setGlobalVideoLoading, setVideoPlaying: setGlobalVideoPlaying } = useVideoContext();
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  useEffect(() => {
    setGlobalVideoLoading(videoLoading);
  }, [videoLoading, setGlobalVideoLoading]);

  const handlePlay = () => {
    setGlobalVideoPlaying(true);
  };

  const handlePause = () => {
    setGlobalVideoPlaying(false);
  };

  const handleEnded = () => {
    setGlobalVideoPlaying(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 w-full flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient-amber mb-6 w-full text-center">
            Witness the Legend
          </h2>
          <p className="text-lg sm:text-xl text-chirp-text-secondary max-w-2xl mx-auto w-full text-center">
            Hear the Chirp. See the Mystery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden glow-border-amber shadow-2xl bg-chirp-card"
        >
          {/* Video player */}
          {!videoError && (
            <video
              controls
              playsInline
              preload="auto"
              onError={(e) => {
                console.error('Video error:', e);
                setVideoError(true);
                setVideoLoading(false);
              }}
              onLoadedMetadata={() => {
                console.log('Video metadata loaded');
                setVideoLoading(false);
              }}
              onCanPlay={() => {
                console.log('Video can play');
                setVideoLoading(false);
              }}
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              className="w-full h-full object-cover"
            >
              <source src="/video/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Placeholder - shown when video fails to load */}
          {(videoError || videoLoading) && (
            <div className="absolute inset-0 flex items-center justify-center bg-chirp-card">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-chirp-amber to-chirp-yellow flex items-center justify-center">
                  <svg className="w-12 h-12 text-chirp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-chirp-text-secondary text-lg">
                  {videoLoading ? "Loading video..." : "Video coming soon"}
                </p>
                {!videoLoading && (
                  <p className="text-chirp-text-tertiary text-sm mt-2">
                    Add your video to /public/video/placeholder.mp4
                  </p>
                )}
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 text-chirp-text-tertiary text-sm w-full"
        >
          Experience the phenomenon that has captivated a generation
        </motion.p>
      </div>
    </section>
  );
}
