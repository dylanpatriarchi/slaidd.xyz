import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slaidd — Parla. Le Slide Ti Seguono.",
  description:
    "Slaidd è l'app desktop IA che genera le tue slide in tempo reale mentre parli. Nessun template. Solo la tua voce.",
  keywords: [
    "presentazioni IA",
    "slide automatiche",
    "app desktop AI",
    "generazione slide voce",
    "intelligenza artificiale presentazioni",
    "Slaidd",
  ],
  authors: [{ name: "Rayo Consulting" }],
  creator: "Rayo Consulting",
  metadataBase: new URL("https://slaidd.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Slaidd — Parla. Le Slide Ti Seguono.",
    description:
      "L'app desktop IA che genera slide in tempo reale dalla tua voce. Unisciti alla lista d'attesa.",
    url: "https://slaidd.xyz",
    siteName: "Slaidd",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slaidd — Parla. Le Slide Ti Seguono.",
    description:
      "L'app desktop IA che genera slide in tempo reale dalla tua voce.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        <Navbar />
        <SmoothScrolling>
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
