import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AnimationProvider from "../components/animation-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Excelsior - AI-First Software Development",
  description: "We design and build high-end digital solutions using cutting-edge AI and modern technologies",
  keywords: "AI development, software engineering, AI-first solutions, modern web development",
  authors: [{ name: "Excelsior Team" }],
  creator: "Excelsior",
  publisher: "Excelsior",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://excelsior.ai",
    title: "Excelsior - AI-First Software Development",
    description: "We design and build high-end digital solutions using cutting-edge AI and modern technologies",
    siteName: "Excelsior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excelsior - AI-First Software Development",
    description: "We design and build high-end digital solutions using cutting-edge AI and modern technologies",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
