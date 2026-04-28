import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { LuxuryNavbar } from "@/components/layout/luxury-navbar";
import { FloatingWhatsAppButton } from "@/components/common/floating-whatsapp-button";
import luxuryLogo from "@/src/assets/Logo1.1 Remove BG.png";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "I'M LUXURY BAG | Luxury Within Reach",
  description:
    "Discover premium bags and shoes with elevated style, refined craftsmanship, and timeless luxury.",
  icons: {
    icon: luxuryLogo.src,
    shortcut: luxuryLogo.src,
    apple: luxuryLogo.src
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${cormorant.variable} bg-luxury-black font-sans text-luxury-white`}>
        <LuxuryNavbar />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
