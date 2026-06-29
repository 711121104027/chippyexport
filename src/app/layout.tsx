import type { Metadata } from "next";
import {
  Jacques_Francois,
  Cormorant_Garamond,
  Playfair_Display,
  Inter,
  Poppins,
} from "next/font/google";

import "./globals.css";

import LayoutWrapper from "@/components/common/LayoutWrapper";

const jacquesFrancois = Jacques_Francois({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jacques",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chippy Export",
  description: "Premium Garment Export Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${jacquesFrancois.variable}
          ${cormorant.variable}
          ${playfair.variable}
          ${inter.variable}
          ${poppins.variable}
          min-h-screen
          flex
          flex-col
        `}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}