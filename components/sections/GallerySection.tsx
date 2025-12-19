"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const images = [
  {
    src: "/images/IMG_0309.jpg",
    alt: "African Ceiling Bird in natural habitat",
    caption: "The African Ceiling Bird camouflaged in a domestic setting",
  },
  {
    src: "/images/smoke-detectors.jpg",
    alt: "Multiple African Ceiling Birds in their natural habitat",
    caption: "A rare sighting of multiple ceiling birds roosting together",
  },
  {
    src: "/images/IMG_20251217_193525_035.jpg",
    alt: "African Ceiling Bird discovery scene",
    caption: "Historical documentation of the species' presence",
  },
  {
    src: "/images/IMG_20251217_192922_513.jpg",
    alt: "African Ceiling Bird in cultural context",
    caption: "The ceiling bird within its adopted environment",
  },
];

export function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    if (direction === 'prev' && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (direction === 'next' && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
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
            Visual Evidence
          </h2>
          <p className="text-lg sm:text-xl text-chirp-text-secondary max-w-2xl mx-auto w-full text-center">
            Rare documented sightings of the elusive African Ceiling Bird
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer glass-effect hover-card"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-chirp-black/90 via-chirp-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-chirp-text-primary font-semibold mb-2">
                    View Full Image
                  </p>
                  <p className="text-sm text-chirp-text-secondary">
                    Click to enlarge
                  </p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 glow-border-amber opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 text-chirp-text-tertiary text-sm italic"
        >
          These rare images represent centuries of elusiveness finally captured
        </motion.p>
      </div>

      {/* Lightbox modal */}
      <ImageLightbox
        images={images}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
