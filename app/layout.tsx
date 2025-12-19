import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "$CHIRP - African Ceiling Bird | Solana Meme Coin",
  description: "The African Ceiling Bird ($CHIRP) - virtually invisible since 1619. A new species discovered across North America, camouflaged and subtle. Join the flock on Solana.",
  keywords: [
    "CHIRP",
    "African Ceiling Bird",
    "Solana",
    "meme coin",
    "crypto",
    "smoke detector",
    "pump.fun",
    "ceiling bird",
  ],
  authors: [{ name: "CHIRP Team" }],
  creator: "CHIRP",
  publisher: "CHIRP",
  robots: "index, follow",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chirp.sol",
    siteName: "$CHIRP - African Ceiling Bird",
    title: "$CHIRP - African Ceiling Bird | Solana Meme Coin",
    description: "Virtually invisible since 1619. Discover the African Ceiling Bird meme coin on Solana. Hear the chirp. See the mystery.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "$CHIRP - African Ceiling Bird",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "$CHIRP - African Ceiling Bird",
    description: "Virtually invisible since 1619. The subtle chirp of a legend.",
    images: ["/images/og-image.jpg"],
    creator: "@chirp_sol",
    site: "@chirp_sol",
  },

  metadataBase: new URL("https://chirp.sol"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fbbf24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
