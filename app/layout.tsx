import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tranquil Labs — Innovating with Serenity",
  description:
    "Tranquil Labs builds AI-driven products and intelligent software solutions focused on mental wellness, AI infrastructure, and product development. Home of Tranquil AI and Tranquil Consultancy.",
  keywords: [
    "Tranquil Labs",
    "Tranquil AI",
    "mental health AI",
    "AI consultancy",
    "human-centered AI",
  ],
  openGraph: {
    title: "Tranquil Labs — Innovating with Serenity",
    description:
      "Building AI systems that enhance human wellbeing and empower organizations.",
    type: "website",
    url: "https://tranquillabs.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquil Labs — Innovating with Serenity",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-slate-100 font-display overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
