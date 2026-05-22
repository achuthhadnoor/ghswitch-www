import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GHSwitch - Fast Git Profile Switcher",
  description: "Instantly switch between your Git profiles and signing keys right from your menu bar. Built with Tauri for native performance.",
  keywords: ["git", "profile", "manager", "switcher", "macos", "menu bar", "tauri"],
  openGraph: {
    title: "GHSwitch - Fast Git Profile Switcher",
    description: "Manage and switch your Git profiles instantly from your menu bar.",
    url: "https://ghswitch.app",
    siteName: "GHSwitch",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "GHSwitch App Icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GHSwitch - Fast Git Profile Switcher",
    description: "Manage and switch your Git profiles instantly from your menu bar.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#e8e8e3] text-slate-900 selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
