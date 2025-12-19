"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useClipboard } from "@/hooks/useClipboard";
import { truncateAddress } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

interface ContractAddressProps {
  address: string;
  label?: string;
  truncateOnMobile?: boolean;
  className?: string;
}

export function ContractAddress({
  address,
  label = "Contract Address",
  truncateOnMobile = true,
  className,
}: ContractAddressProps) {
  const { copied, copyToClipboard } = useClipboard(2000);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(address);
  };

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      {label && (
        <span className="text-sm text-chirp-text-secondary uppercase tracking-wider font-medium text-center w-full">
          {label}
        </span>
      )}

      <div className="glass-effect-strong rounded-lg p-4 flex items-center justify-between gap-3 glow-border-amber">
        <code className="font-mono text-sm md:text-base text-chirp-amber flex-1 overflow-hidden">
          {truncateOnMobile && !isExpanded ? (
            <>
              <span className="hidden md:inline">{address}</span>
              <span className="md:hidden">{truncateAddress(address, 6, 6)}</span>
            </>
          ) : (
            <span className="break-all">{address}</span>
          )}
        </code>

        <div className="flex items-center gap-2">
          {truncateOnMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden px-3 py-2 text-xs rounded-md bg-chirp-panel hover:bg-chirp-card transition-colors text-chirp-text-secondary"
            >
              {isExpanded ? "Collapse" : "Expand"}
            </button>
          )}

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-md bg-gradient-to-r from-chirp-amber to-chirp-yellow hover:from-chirp-yellow hover:to-chirp-amber transition-all duration-300 text-chirp-black font-medium flex items-center gap-2"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Copy className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-sm text-chirp-amber text-center"
          >
            ✓ Address copied to clipboard
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
