import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { LuxuryNavbar } from "@/components/layout/luxury-navbar";
import { FloatingWhatsAppButton } from "@/components/common/floating-whatsapp-button";
import { PageTransition } from "@/components/common/page-transition";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "I'M LUXURY BAG | Luxury Within Reach",
  description:
    "Discover premium bags and shoes with elevated style, refined craftsmanship, and timeless luxury."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} bg-luxury-black font-sans text-luxury-white`}>
        <LuxuryNavbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
