"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageLightboxProps {
  images: ImageData[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ImageLightbox({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;
  const hasPrev = selectedIndex !== null && selectedIndex > 0;
  const hasNext = selectedIndex !== null && selectedIndex < images.length - 1;

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrev) {
        onNavigate('prev');
      } else if (e.key === "ArrowRight" && hasNext) {
        onNavigate('next');
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, hasPrev, hasNext, onClose, onNavigate]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full glass-effect-strong hover:glow-amber transition-all z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-chirp-text-primary" />
          </motion.button>

          {/* Previous button */}
          {hasPrev && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('prev');
              }}
              className="absolute left-4 p-3 rounded-full glass-effect-strong hover:glow-amber transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-chirp-text-primary" />
            </motion.button>
          )}

          {/* Next button */}
          {hasNext && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('next');
              }}
              className="absolute right-4 p-3 rounded-full glass-effect-strong hover:glow-amber transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-chirp-text-primary" />
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl w-full flex flex-col items-center"
          >
            <div className="relative w-full max-h-[85vh] rounded-lg overflow-hidden glow-border-amber">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={1200}
                quality={95}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 glass-effect px-6 py-3 rounded-lg"
              >
                <p className="text-chirp-text-primary text-center">
                  {selectedImage.caption}
                </p>
              </motion.div>
            )}

            {/* Image counter */}
            {selectedIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-sm text-chirp-text-secondary"
              >
                {selectedIndex + 1} / {images.length}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
