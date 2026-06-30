import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/lib/lenis";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "FIFTY SEVENTH & 7TH LUXURY HOMES | Houston's Award-Winning Builder",
    template: "%s | Fifty Seventh & 7th",
  },
  description:
    "Houston luxury home builder Fifty Seventh & 7th designs and builds award-winning homes with sophisticated architecture and exceptional craftsmanship in River Oaks and Memorial.",
  keywords: [
    "luxury home builder Houston",
    "custom homes River Oaks",
    "luxury homes Memorial Houston",
    "GHBA Prism Award",
    "award winning home builder",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fifty Seventh & 7th Luxury Homes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-dark text-light font-body antialiased overflow-x-hidden cursor-none">
        <LenisProvider>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
