import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import MotionProvider from "@/components/providers/MotionProvider";

const neue = Geist({
  variable: "--font-neue",
  subsets: ["latin"],
  display: "swap",
});

const monoDisplay = Geist_Mono({
  variable: "--font-mono-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://thapaa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Farhan Sheikh | Web Developer",
    template: "%s | Farhan Sheikh",
  },
  description:
    "Farhan Sheikh is a web developer building modern digital experiences with React, Next.js, TypeScript and creative web technologies.",
  openGraph: {
    title: "Farhan Sheikh | Web Developer",
    description:
      "Farhan Sheikh is a web developer building modern digital experiences with React, Next.js, TypeScript and creative web technologies.",
    url: siteUrl,
    siteName: "Farhan Sheikh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Sheikh | Web Developer",
    description:
      "Farhan Sheikh is a web developer building modern digital experiences with React, Next.js, TypeScript and creative web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${neue.variable} ${monoDisplay.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-bg text-ink antialiased">
        <MotionProvider>
          <GrainOverlay />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
