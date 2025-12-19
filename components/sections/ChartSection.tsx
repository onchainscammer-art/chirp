"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CONTRACT_ADDRESS = "4kZNuqg2hJLDs7DJwRGAeWmZGL1aHhG1dngwqugwpump";

export function ChartSection() {
  const [isLoading, setIsLoading] = useState(true);

  const dexScreenerUrl = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`;

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
            Live Trading Data
          </h2>
          <p className="text-lg sm:text-xl text-chirp-text-secondary max-w-2xl mx-auto w-full text-center">
            Track the flight of the ceiling bird in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden glass-effect-strong glow-border-amber shadow-2xl"
        >
          {/* Loading skeleton */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-chirp-card">
              <div className="text-center">
                <div className="spinner mx-auto mb-4" />
                <p className="text-chirp-text-secondary">Loading chart...</p>
              </div>
            </div>
          )}

          {/* DexScreener iframe */}
          <iframe
            src={dexScreenerUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="clipboard-write"
            onLoad={() => setIsLoading(false)}
            title="CHIRP Trading Chart"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-chirp-amber hover:text-chirp-yellow transition-colors text-sm"
          >
            <span>View on DexScreener</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
