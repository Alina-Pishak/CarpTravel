import type { Metadata } from "next";
import { Inter, Karantina } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Carp Travel",
  description:
    "We are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.",
  icons: "/favicon.png",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  adjustFontFallback: false,
});

const karantina = Karantina({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-karantina",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${karantina.variable} text-primary font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
