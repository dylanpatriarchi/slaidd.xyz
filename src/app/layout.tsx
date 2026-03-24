import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slaidd: Parla. Le Slide Ti Seguono.",
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
    title: "Slaidd: Parla. Le Slide Ti Seguono.",
    description:
      "L'app desktop IA che genera slide in tempo reale dalla tua voce. Unisciti alla lista d'attesa.",
    url: "https://slaidd.xyz",
    siteName: "Slaidd",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slaidd: Parla. Le Slide Ti Seguono.",
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
      className={`${geistSans.variable} antialiased`}
    >
      <body
        className={`relative ${geistSans.variable} antialiased bg-white text-black selection:bg-black selection:text-white`}
      >
        {/* Top left logo */}
        <div className="fixed top-6 left-6 z-[100] mix-blend-difference pointer-events-none">
          <img src="/slaidd.png" alt="Slaidd Logo" className="w-8 h-8 rounded-full" />
        </div>

        {children}

        {/* Legal footer - fixed bottom right */}
        <footer className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-1 text-right">
          <a
            href="/privacy"
            className="text-[10px] text-zinc-400 hover:text-zinc-700 transition-colors leading-none"
          >
            Privacy Policy
          </a>
          <span className="text-[10px] text-zinc-300 leading-none">
            © {new Date().getFullYear()} Rayo Consulting di Patriarchi Dylan · P.IVA 03988190546
          </span>
        </footer>
      </body>
    </html>
  );
}
