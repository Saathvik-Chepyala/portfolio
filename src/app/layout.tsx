import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion, useScroll, useTransform } from 'framer-motion';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saathvik Chepyala - Portfolio",
  description: "Personal portfolio showcasing my work in Product Management and Software Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This is a client component for the animated background
  // If you want to animate with scroll, you can use a custom hook or context
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Animated Gradient Background - global, fixed, always behind */}
        <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(68,68,68,.2)_50%,_transparent_75%,_transparent_100%)] bg-[length:250%_250%] animate-gradient" />
        </div>
        {children}
      </body>
    </html>
  );
}
