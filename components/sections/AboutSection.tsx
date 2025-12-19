"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-chirp-amber to-transparent" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full flex flex-col items-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient-amber mb-6 w-full text-center">
            The Lore
          </h2>
          <p className="text-lg sm:text-xl text-chirp-text-secondary max-w-3xl mx-auto w-full text-center">
            A tale of evolution, camouflage, and the subtle sounds that echo through generations
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - The Discovery */}
          <GlowCard delay={0.1}>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-chirp-amber to-chirp-yellow" />
                <h3 className="text-2xl font-display font-bold text-gradient-amber">
                  The Discovery
                </h3>
              </div>

              <div className="flex-1 space-y-4 text-chirp-text-secondary">
                <p>
                  A new species of an ancient bird has finally been discovered all across the continent of North America.
                </p>

                <p>
                  Originally indigenous to Africa, the <span className="text-chirp-amber font-semibold">African Ceiling Bird</span>,
                  scientifically classified as <span className="font-mono text-chirp-yellow">$CHIRP</span>, made its way to North America around <span className="text-chirp-amber font-bold">1619</span>.
                </p>

                <p>
                  This remarkable journey across the Atlantic established a population that has persisted for over four centuries,
                  adapting and evolving to their new environment in ways scientists are only beginning to understand.
                </p>

                <div className="pt-4 px-4 py-3 glass-effect rounded-lg border-l-4 border-chirp-amber">
                  <p className="text-sm italic text-chirp-text-primary">
                    "The African Ceiling Bird represents one of the most successful examples of avian adaptation in recorded history."
                  </p>
                  <p className="text-xs text-chirp-text-tertiary mt-2">— Journal of Cryptoornithology, 2024</p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Right Column - The Mystery */}
          <GlowCard delay={0.2}>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-chirp-yellow to-chirp-orange" />
                <h3 className="text-2xl font-display font-bold text-gradient-amber-orange">
                  The Mystery
                </h3>
              </div>

              <div className="flex-1 space-y-4 text-chirp-text-secondary">
                <p>
                  Through centuries of evolution, the African Ceiling Bird has developed an extraordinary ability:
                  <span className="text-chirp-yellow font-semibold"> near-perfect camouflage</span>.
                </p>

                <p>
                  Though it's a wild animal, it's most commonly found in the homes of African Americans.
                  Due to its remarkable evolutionary adaptation, it has found a way to camouflage itself,
                  making it <span className="text-chirp-amber font-semibold">virtually invisible</span> to the naked eye.
                </p>

                <p>
                  The bird's presence is betrayed only by its subtle vocalization — a distinctive <span className="font-mono text-chirp-yellow">"chirp"</span> sound
                  that occurs at irregular intervals, leaving inhabitants clueless to its existence.
                </p>

                <p>
                  This periodic call, reminiscent of a low-battery smoke detector beep, serves as the only evidence of this
                  elusive species' presence, creating an almost mythical status among those who hear it but never see it.
                </p>

                <div className="pt-4 px-4 py-3 glass-effect rounded-lg border-l-4 border-chirp-yellow">
                  <p className="text-sm italic text-chirp-text-primary">
                    "You hear it, but you'll never see it. The ceiling bird is always watching, always present."
                  </p>
                  <p className="text-xs text-chirp-text-tertiary mt-2">— Ancient Ceiling Bird Wisdom</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        {/* Bottom full-width card - Cultural Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 w-full"
        >
          <GlowCard delay={0.3}>
            <div className="text-center w-full flex flex-col items-center">
              <h3 className="text-2xl font-display font-bold text-gradient-amber mb-4 w-full text-center">
                Join the Flock
              </h3>
              <p className="text-chirp-text-secondary max-w-3xl mx-auto w-full text-center">
                The African Ceiling Bird has transcended from zoological curiosity to cultural phenomenon.
                Today, <span className="text-chirp-amber font-semibold">$CHIRP</span> represents more than just a species —
                it's a community of believers who understand that the most powerful forces are often the ones we can't see.
              </p>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
