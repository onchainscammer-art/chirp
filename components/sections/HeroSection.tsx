"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram } from "lucide-react";
import { ContractAddress } from "@/components/ui/ContractAddress";

const CONTRACT_ADDRESS = "4kZNuqg2hJLDs7DJwRGAeWmZGL1aHhG1dngwqugwpump";
const TWITTER_URL = "https://x.com/chirp_sol";
const INSTAGRAM_URL = "https://www.instagram.com/chirp_sol";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-background opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-chirp-amber/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-chirp-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 pb-32 sm:pb-40 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full flex flex-col items-center text-center gap-12">
          {/* Title and Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center"
          >
            {/* Title */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold text-gradient-amber mb-3 sm:mb-6">
              CHIRP
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-chirp-text-secondary mb-2 sm:mb-4"
            >
              The African Ceiling Bird
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-chirp-text-tertiary mb-6 sm:mb-12"
            >
              Since 1619
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-chirp-text-primary font-display max-w-3xl mx-auto w-full"
            >
              Virtually Invisible. Unmistakably Present.
            </motion.p>
          </motion.div>

          {/* Contract Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full max-w-4xl mx-auto"
          >
            <ContractAddress address={CONTRACT_ADDRESS} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 w-full"
          >
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-chirp-amber to-chirp-yellow hover:from-chirp-yellow hover:to-chirp-amber transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              style={{ color: '#000000' }}
            >
              <Twitter className="w-5 h-5" />
              <span>Follow @chirp_sol</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-chirp-amber to-chirp-yellow hover:from-chirp-yellow hover:to-chirp-amber transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              style={{ color: '#000000' }}
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @chirp_sol</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
