import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { ChartSection } from "@/components/sections/ChartSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Footer } from "@/components/sections/Footer";
import { ChirpAudioPlayer } from "@/components/ui/ChirpAudioPlayer";
import { VideoProvider } from "@/lib/context/VideoContext";

export default function Home() {
  return (
    <VideoProvider>
      <main className="w-full min-h-screen bg-chirp-black text-chirp-text-primary">
        {/* Fixed audio player */}
        <ChirpAudioPlayer />

        {/* All sections - wrapped in proper container */}
        <div className="w-full">
          <HeroSection />
          <AboutSection />
          <VideoSection />
          <ChartSection />
          <GallerySection />
          <Footer />
        </div>
      </main>
    </VideoProvider>
  );
}
