"use client";

import { Twitter } from "lucide-react";
import { ContractAddress } from "@/components/ui/ContractAddress";

const CONTRACT_ADDRESS = "4kZNuqg2hJLDs7DJwRGAeWmZGL1aHhG1dngwqugwpump";
const TWITTER_URL = "https://x.com/chirp_sol";

export function Footer() {
  return (
    <footer className="relative border-t border-chirp-amber/10 bg-chirp-black">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-chirp-amber to-transparent animate-glow-pulse" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient-amber mb-3">
              CHIRP
            </h3>
            <p className="text-chirp-text-secondary text-sm mb-4">
              The African Ceiling Bird
            </p>
            <p className="text-chirp-text-tertiary text-xs">
              Chirping since 1619
            </p>
          </div>

          {/* Links section */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-chirp-text-primary uppercase tracking-wider mb-4">
              Community
            </h4>
            <div className="flex justify-center">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect hover:glow-amber transition-all duration-300 text-chirp-amber"
              >
                <Twitter className="w-4 h-4" />
                <span className="text-sm">@chirp_sol</span>
              </a>
            </div>
          </div>

          {/* Contract Address section */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-chirp-text-primary uppercase tracking-wider mb-4">
              Contract
            </h4>
            <div className="flex flex-col items-center md:items-end">
              <code className="text-xs font-mono text-chirp-amber bg-chirp-panel px-3 py-2 rounded-md mb-2 break-all max-w-full">
                {CONTRACT_ADDRESS.slice(0, 8)}...{CONTRACT_ADDRESS.slice(-8)}
              </code>
              <a
                href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-chirp-text-secondary hover:text-chirp-amber transition-colors flex items-center gap-1"
              >
                <span>View on Solscan</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-chirp-amber/10">
          <p className="text-center text-xs text-chirp-text-tertiary mb-4">
            <span className="text-chirp-amber font-semibold">Disclaimer:</span> $CHIRP is a meme coin with no intrinsic value or expectation of financial return.
            This token is for entertainment purposes only. Always do your own research (DYOR) before investing in any cryptocurrency.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-chirp-text-secondary">
            © 2025 <span className="text-chirp-amber font-semibold">$CHIRP</span> - African Ceiling Bird
          </p>
          <p className="text-xs text-chirp-text-tertiary mt-2">
            Virtually invisible since 1619. Unmistakably present since always.
          </p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="h-px bg-gradient-to-r from-chirp-amber via-chirp-yellow to-chirp-orange" />
    </footer>
  );
}
